import assert from "node:assert/strict";
import { chromium } from "playwright";

const origin = process.env.ANVA_TEST_URL ?? "http://127.0.0.1:4173";
const titleByRoute = {
  "/": "Advanced Nautical Ventures FZE | ANVA Marine",
  "/about": "About ANVA Marine | Marine Support Company Dubai",
  "/contact": "Contact ANVA Marine | Request a Marine Service or Spares Quote",
  "/services": "Marine Services, Drydocking and Ship Repair | ANVA Marine",
  "/services/riding-squads": "Marine Riding Squads and Onboard Repairs | ANVA Marine",
  "/products-brands": "Marine Equipment, Products and Brands | ANVA Marine",
  "/green-shipping-solutions": "Green Shipping and Vessel Efficiency Solutions | ANVA Marine",
  "/spares/engine-room-machinery": "Engine Room and Machinery Spares | ANVA Marine",
  "/spares/hard-to-source-oem": "Hard-to-Source Marine OEM Spares | ANVA Marine",
};

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1365, height: 900 } });
const pageErrors = [];
page.on("pageerror", (error) => pageErrors.push(error.message));

let providerReady = true;
let providerFailure = false;
let lastPayload = null;
await page.route("https://anva-site-c5i4.onrender.com/api/rfq/status", async (route) => {
  await route.fulfill({
    status: 200,
    contentType: "application/json",
    headers: { "access-control-allow-origin": "*" },
    body: JSON.stringify({ available: providerReady }),
  });
});
await page.route("https://anva-site-c5i4.onrender.com/api/rfq", async (route) => {
  lastPayload = JSON.parse(route.request().postData() ?? "{}");
  await route.fulfill({
    status: providerFailure ? 502 : 200,
    contentType: "application/json",
    headers: { "access-control-allow-origin": "*" },
    body: providerFailure ? JSON.stringify({ ok: false, message: "Provider unavailable" })
      : JSON.stringify({ ok: true, reference: "test-provider-message-1" }),
  });
});

const cspErrors = [];
page.on("console", (message) => {
  if (message.type() === "error" && /content security policy|refused to (load|execute|evaluate|apply)/i.test(message.text())) {
    cspErrors.push(message.text());
  }
});

try {
  for (const [route, title] of Object.entries(titleByRoute)) {
    const response = await page.goto(origin + route, { waitUntil: "domcontentloaded" });
    assert.ok(response && response.status() < 400, `Route ${route} failed with HTTP ${response?.status()}`);
    await page.waitForFunction((expected) => document.title === expected, title, { timeout: 10000 });
    const head = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute("content"),
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
      ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute("content"),
      heading: document.querySelector("h1")?.textContent?.trim(),
    }));
    assert.equal(head.title, title);
    assert.ok(head.description && head.description.length > 30, `No description on ${route}`);
    assert.equal(head.canonical, `https://www.anva-group.com${route}`);
    assert.equal(head.ogUrl, head.canonical);
    assert.ok(head.heading, `No H1 on ${route}`);
    if (route === "/") {
      await page.locator(".nav-logo-lottie__viewport svg").waitFor({ state: "visible", timeout: 12000 });
      console.log("PASS animated navigation logo under strict CSP");
    }
    console.log(`PASS ${route}: ${head.title}`);
  }

  await page.goto(origin + "/contact", { waitUntil: "domcontentloaded" });
  const formFields = ["fullName", "company", "workEmail", "phone", "enquiryType", "requirement"];
  for (const name of formFields) {
    const field = page.locator(`[name="${name}"]`);
    assert.equal(await field.count(), 1, `Missing form control ${name}`);
    const id = await field.getAttribute("id");
    assert.ok(id, `Control ${name} has no ID`);
    assert.equal(await page.locator(`label[for="${id}"]`).count(), 1, `No associated label for ${name}`);
  }
  assert.equal(await page.locator('[name="requirement"]').getAttribute("required"), "", "Requirement should be required");

  await page.waitForFunction(() => document.querySelector('button[type="submit"]')?.disabled === false);
  await page.locator('[name="fullName"]').fill("ANVA Website Test");
  await page.locator('[name="company"]').fill("ANVA Marine QA");
  await page.locator('[name="workEmail"]').fill("website-test@example.com");
  await page.locator('[name="phone"]').fill("+971500000000");
  await page.locator('[name="requirement"]').fill("Please quote replacement ship spare item TEST123.");
  await page.getByRole("button", { name: "Send Enquiry" }).click();
  await page.getByRole("status").filter({ hasText: "accepted for email delivery" }).waitFor();
  assert.equal(lastPayload.company, "ANVA Marine QA", "RFQ company omitted");
  assert.equal(lastPayload.workEmail, "website-test@example.com", "RFQ reply email omitted");
  assert.ok(lastPayload.requirement.includes("ship spare item TEST123"), "RFQ description omitted");
  assert.ok(lastPayload.requestId, "RFQ must include stable idempotency ID");
  assert.equal(await page.locator('[name="fullName"]').inputValue(), "", "Successful request should clear form");
  console.log("PASS direct website enquiry accepted by mocked backend");

  await page.goto(origin + "/contact", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.querySelector('button[type="submit"]')?.disabled === false);
  providerFailure = true;
  await page.locator('[name="fullName"]').fill("ANVA Website Test");
  await page.locator('[name="company"]').fill("ANVA Marine QA");
  await page.locator('[name="workEmail"]').fill("website-test@example.com");
  await page.locator('[name="requirement"]').fill("Replacement engine part for vessel TEST456.");
  await page.getByRole("button", { name: "Send Enquiry" }).click();
  await page.getByRole("alert").filter({ hasText: "could not be confirmed" }).waitFor();
  assert.equal(await page.locator('[name="fullName"]').inputValue(), "ANVA Website Test", "Failed request erased input");
  assert.ok(await page.getByRole("button", { name: "Gmail" }).isVisible(), "Missing error fallback");
  console.log("PASS backend failure preserves fields and displays alternatives");

  providerReady = false;
  await page.goto(origin + "/contact", { waitUntil: "domcontentloaded" });
  await page.getByRole("alert").filter({ hasText: "Direct website sending is not available" }).waitFor();
  assert.ok(await page.getByRole("button", { name: "Send Enquiry" }).isDisabled(), "Unconfigured backend must not offer fake sending");
  assert.ok(await page.getByRole("button", { name: "Outlook" }).isVisible(), "Unconfigured backend must show alternatives");
  console.log("PASS direct form never claims availability without configured backend");

  await page.goto(origin + "/services#drydocking-ship-repair-support", { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#drydocking-ship-repair-support", { timeout: 10000 });
  await page.waitForFunction(() => window.scrollY > 50, undefined, { timeout: 10000 });
  console.log("PASS services hash navigation");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin + "/contact", { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#rfq-requirement");
  const zoomAllowed = await page.evaluate(() => !document.querySelector('meta[name="viewport"]')?.getAttribute("content")?.includes("maximum-scale=1"));
  assert.ok(zoomAllowed, "Pinch zoom is blocked");
  const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  assert.ok(horizontalOverflow <= 4, `390px viewport has ${horizontalOverflow}px horizontal overflow`);
  await page.getByRole("button", { name: "Toggle mobile menu" }).click();
  assert.ok(await page.locator("#mobile-primary-menu").isVisible(), "Mobile menu failed to open");
  console.log("PASS mobile form and menu");

  assert.deepEqual(pageErrors, [], "Uncaught JavaScript errors");
  assert.deepEqual(cspErrors, [], "Strict CSP blocked ANVA scripts, images or styles");
  console.log("ANVA Chromium desktop/mobile smoke tests PASSED.");
} finally {
  await browser.close();
}

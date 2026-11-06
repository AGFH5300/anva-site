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

  const rfqEndpoint = "https://formsubmit.co/ajax/info@anva-group.com";
  let deliveredPayload;
  let providerAccepted = true;
  await page.route(rfqEndpoint, async (route) => {
    const request = route.request();
    if (request.method() === "OPTIONS") {
      await route.fulfill({
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Accept",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
        },
      });
      return;
    }
    deliveredPayload = JSON.parse(request.postData() ?? "{}");
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(providerAccepted ? { success: "true" } : { success: "false", message: "Form is not activated" }),
    });
  });
  const fillRfq = async () => {
    await page.locator('[name="fullName"]').fill("ANVA Smoke Test");
    await page.locator('[name="company"]').fill("ANVA Quality Assurance");
    await page.locator('[name="workEmail"]').fill("qa@example.com");
    await page.locator('[name="phone"]').fill("+971000000000");
    await page.locator('[name="requirement"]').fill("Please quote one test marine part; no real enquiry.");
  };
  await fillRfq();
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await page.getByRole("status").filter({ hasText: "accepted by the delivery service" }).waitFor({ timeout: 15000 });
  assert.equal(deliveredPayload.email, "qa@example.com", "RFQ email missing from delivery");
  assert.equal(deliveredPayload.company, "ANVA Quality Assurance", "RFQ company missing");
  assert.ok(deliveredPayload.message.includes("test marine part"), "RFQ requirement missing");
  assert.equal(await page.locator('[name="fullName"]').inputValue(), "", "Successful RFQ should clear form");
  console.log("PASS RFQ provider success (mocked)");

  await page.reload({ waitUntil: "domcontentloaded" });
  providerAccepted = false;
  await fillRfq();
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await page.getByRole("alert").filter({ hasText: "one-time activation" }).waitFor({ timeout: 15000 });
  assert.equal(await page.locator('[name="fullName"]').inputValue(), "ANVA Smoke Test", "Failed RFQ erased input");
  const gmailFallback = await page.getByRole("link", { name: "Open prepared enquiry in Gmail" }).getAttribute("href");
  assert.ok(gmailFallback?.includes("mail.google.com/mail/?view=cm"), "Missing Gmail fallback");
  assert.ok(gmailFallback?.includes("test%20marine%20part"), "Gmail fallback lost requirement");
  console.log("PASS RFQ provider error with preserved fields and Gmail fallback (mocked)");
  await page.unroute(rfqEndpoint);


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

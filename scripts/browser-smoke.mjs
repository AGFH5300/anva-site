import assert from "node:assert/strict";
import { chromium } from "playwright";

const origin = process.env.ANVA_TEST_URL ?? "http://127.0.0.1:4173";
const titleByRoute = {
  "/": "Marine Spares, Ship Repair & Drydocking in Dubai | ANVA Marine",
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

  // Test public product discovery in the desktop dropdown and human sitemap.
  await page.goto(origin + "/", { waitUntil: "domcontentloaded" });
  await page.locator('nav[aria-label="Primary"] > ul > li > a[href="/products-brands"]').hover();
  const productMenu = page.locator("#desktop-products-brands-submenu");
  await productMenu.waitFor({ state: "visible" });
  for (const href of [
    "/products/bildal-airfield-lighting/",
    "/products/power-rectifiers-semiconductors/",
    "/products/welding-cables/",
    "/spares/engine-room-machinery",
    "/spares/hard-to-source-oem",
    "/sitemap/",
  ]) {
    assert.equal(await productMenu.locator(`a[href="${href}"]`).count(), 1, `Missing desktop menu link ${href}`);
  }
  await productMenu.locator('a[href="/products/bildal-airfield-lighting/"]').click();
  await page.waitForURL("**/products/bildal-airfield-lighting/");
  const productPage = await page.goto(origin + "/products/bildal-airfield-lighting/", { waitUntil: "domcontentloaded" });
  assert.equal(productPage?.status(), 200, "Product link must load the actual BILDAL HTML page");
  assert.ok((await page.locator("h1").textContent())?.includes("BILDAL"), "Product menu did not open BILDAL page");
  const sitemapPage = await page.goto(origin + "/sitemap/", { waitUntil: "domcontentloaded" });
  assert.equal(sitemapPage?.status(), 200, "Readable sitemap should return HTTP 200");
  assert.ok((await page.locator("h1").textContent())?.includes("sitemap"), "Human sitemap unavailable");
  for (const href of [
    "/products/bildal-airfield-lighting/",
    "/products/power-rectifiers-semiconductors/",
    "/products/welding-cables/",
  ]) {
    assert.equal(await page.locator(`main a[href="${href}"]`).count(), 1, `Sitemap omits product ${href}`);
  }
  console.log("PASS desktop product dropdown and public sitemap");

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

  let capturedPayload = null;
  await page.route("https://mxdibxggmfdfdgcrzbqy.supabase.co/functions/v1/anva-website-rfq", async (route) => {
    if (route.request().method() === "OPTIONS") {
      await route.fulfill({ status: 204, headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "content-type" } });
      return;
    }
    capturedPayload = route.request().postDataJSON();
    await route.fulfill({ status: 200, contentType: "application/json",
      headers: { "Access-Control-Allow-Origin": origin },
      body: JSON.stringify({ ok: true }) });
  });
  await page.locator('[name="fullName"]').fill("ANVA Website Test");
  await page.locator('[name="company"]').fill("ANVA Marine QA");
  await page.locator('[name="workEmail"]').fill("website-test@example.com");
  await page.locator('[name="requirement"]').fill("Please quote replacement marine spare item TEST123.");
  await page.locator('[name="agreed_to_contact"]').check();
  await page.getByRole("button", { name: "Submit RFQ to ANVA Marine" }).click();
  await page.getByText("Thank you. Your enquiry has been received.").waitFor();
  assert.ok(capturedPayload, "RFQ request was not sent");
  assert.equal(capturedPayload.fullName, "ANVA Website Test");
  assert.equal(capturedPayload.company, "ANVA Marine QA");
  assert.equal(capturedPayload.agreed_to_contact, true);
  assert.match(capturedPayload.requirement, /TEST123/);
  console.log("PASS direct RFQ submission, consent and success state with mocked backend");


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
  await page.locator('#mobile-primary-menu button[aria-controls="mobile-products-brands-submenu"]').click();
  for (const href of [
    "/products/bildal-airfield-lighting/",
    "/products/power-rectifiers-semiconductors/",
    "/products/welding-cables/",
    "/sitemap/",
  ]) {
    assert.equal(await page.locator(`#mobile-products-brands-submenu a[href="${href}"]`).count(), 1, `Mobile menu missing ${href}`);
  }
  await page.keyboard.press("Escape");
  assert.ok(!(await page.locator("#mobile-primary-menu").isVisible()), "Escape should close mobile menu");
  console.log("PASS mobile form, full product menu and Escape keyboard dismissal");

  assert.deepEqual(pageErrors, [], "Uncaught JavaScript errors");
  assert.deepEqual(cspErrors, [], "Strict CSP blocked ANVA scripts, images or styles");
  console.log("ANVA Chromium desktop/mobile smoke tests PASSED.");
} finally {
  await browser.close();
}

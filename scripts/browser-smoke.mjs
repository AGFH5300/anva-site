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
  console.log("ANVA Chromium desktop/mobile smoke tests PASSED.");
} finally {
  await browser.close();
}

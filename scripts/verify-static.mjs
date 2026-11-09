import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const outDir = join("dist", "public");
const site = "https://www.anva-group.com";
const pages = [
  ["", "Marine Spares, Ship Repair & Drydocking in Dubai | ANVA Marine"],
  ["about", "About ANVA Marine | Marine Support Company Dubai"],
  ["contact", "Contact ANVA Marine | Request a Marine Service or Spares Quote"],
  ["services", "Marine Services, Drydocking and Ship Repair | ANVA Marine"],
  ["services/riding-squads", "Marine Riding Squads and Onboard Repairs | ANVA Marine"],
  ["products-brands", "Marine Equipment, Products and Brands | ANVA Marine"],
  ["green-shipping-solutions", "Green Shipping and Vessel Efficiency Solutions | ANVA Marine"],
  ["spares/engine-room-machinery", "Engine Room and Machinery Spares | ANVA Marine"],
  ["spares/hard-to-source-oem", "Hard-to-Source Marine OEM Spares | ANVA Marine"],
];
const aliases = {
  products: "products-brands",
  brands: "products-brands",
  "green-shipping": "green-shipping-solutions",
};

for (const [path, title] of pages) {
  const html = await readFile(join(outDir, path, "index.html"), "utf8");
  const canonical = `${site}/${path}`;
  assert.ok(html.includes(`<title>${title}</title>`), `Missing unique title: ${path || "/"}`);
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `Missing canonical: ${path || "/"}`);
  assert.ok(html.includes(`<meta property="og:url" content="${canonical}"`), `Missing Open Graph URL: ${path || "/"}`);
  assert.match(html, /<meta name="description" content="[^"]{30,}"/, `Missing description: ${path || "/"}`);
  assert.ok(!html.includes("maximum-scale=1"), `Mobile zoom blocked: ${path || "/"}`);
}

for (const [alias, target] of Object.entries(aliases)) {
  const html = await readFile(join(outDir, alias, "index.html"), "utf8");
  assert.ok(html.includes(`href="${site}/${target}"`), `Alias canonical incorrect: ${alias}`);
}

const robots = await readFile(join(outDir, "robots.txt"), "utf8");
const sitemap = await readFile(join(outDir, "sitemap.xml"), "utf8");
assert.ok(robots.includes(`Sitemap: ${site}/sitemap.xml`));
for (const [page] of pages) {
  assert.ok(sitemap.includes(`<loc>${site}/${page}</loc>`), `Missing sitemap URL: ${page || "/"}`);
}

const contact = await readFile("client/src/pages/Contact.tsx", "utf8");
assert.match(contact, /name="requirement"/, "RFQ requirement field not captured");
assert.match(contact, /htmlFor="rfq-requirement"/, "Requirement field label not associated");
const services = await readFile("client/src/pages/Services.tsx", "utf8");
for (const id of [
  "drydocking-ship-repair-support",
  "marine-project-management",
  "marine-technical-consultancy",
  "commercial-procurement-consultancy",
]) {
  assert.ok(services.includes(`id: "${id}"`), `Missing Services anchor: ${id}`);
}
const capabilityPage = await readFile(join(outDir, "marine-capabilities", "index.html"), "utf8");
assert.ok(capabilityPage.includes("<h1>Marine spares, drydocking support"), "Missing crawlable marine capabilities page");
assert.ok(sitemap.includes("https://www.anva-group.com/marine-capabilities/"), "Marine capabilities not listed in sitemap");
const productPages = [
  ["bildal-airfield-lighting", "BILDAL Airfield Lighting Isolation Transformers UAE"],
  ["power-rectifiers-semiconductors", "Power Diodes, SCR Thyristors & Rectifier Modules UAE"],
  ["welding-cables", "Welding Cable 35"],
];
for (const [slug, titleStart] of productPages) {
  const html = await readFile(join(outDir, "products", slug, "index.html"), "utf8");
  assert.ok(html.includes("<title>" + titleStart), "Wrong product page title for " + slug);
  assert.ok(html.includes('<link rel="canonical" href="' + site + "/products/" + slug + '/"'), "Missing canonical for " + slug);
  assert.ok(html.includes('href="/contact?product=' + slug), "No contextual RFQ CTA for " + slug);
  assert.ok(sitemap.includes(site + "/products/" + slug + "/"), "Product not in sitemap: " + slug);
}
const rectifierPage = await readFile(join(outDir, "products", "power-rectifiers-semiconductors", "index.html"), "utf8");
assert.doesNotMatch(rectifierPage, /insel|\\bIRI\\b|rectifierindia/i, "Prohibited supplier name disclosed on rectifier landing page");
const privacy = await readFile(join(outDir, "privacy", "index.html"), "utf8");
assert.ok(privacy.includes("Visitor statistics"), "Missing privacy disclosure");
assert.ok(sitemap.includes(site + "/privacy/"), "Missing privacy sitemap entry");
const tracking = await readFile(join(outDir, "traffic.js"), "utf8");
assert.ok(tracking.includes("navigator.doNotTrack"), "Tracking opt-out missing");
assert.ok(tracking.includes("public-site-analytics"), "Analytics endpoint not configured");
await stat(join(outDir, "product-landing.css"));
await stat(join(outDir, "assets"));
console.log(`ANVA static build checks passed for ${pages.length} canonical pages and ${Object.keys(aliases).length} aliases.`);

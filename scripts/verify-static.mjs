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
const sourceHeader = await readFile("client/src/components/site/Header.tsx", "utf8");
const brandOverview = await readFile("client/src/pages/Brands.tsx", "utf8");
const sitemapHtml = await readFile(join(outDir, "sitemap", "index.html"), "utf8");
assert.match(sitemapHtml, /<h1>ANVA Marine sitemap<\/h1>/, "Missing visitor-facing sitemap");
assert.ok(sitemap.includes(site + "/sitemap/"), "Human-readable sitemap must be indexed");
const productRoutes = [
  "/products/bildal-airfield-lighting/",
  "/products/power-rectifiers-semiconductors/",
  "/products/welding-cables/",
  "/spares/engine-room-machinery",
  "/spares/hard-to-source-oem",
  "/green-shipping-solutions",
];
for (const href of productRoutes) {
  assert.ok(sourceHeader.includes(`href: "${href}"`), `Product missing from top dropdown: ${href}`);
  assert.ok(sitemapHtml.includes(`href="${href}"`), `Product missing from HTML sitemap: ${href}`);
}
const familyAnchors = [
  "engine-diagnostics", "cargo-gauging", "hydraulics", "corrosion-protection",
  "marine-signaling", "propulsion-components", "tank-cleaning", "water-treatment", "doors-hatches",
];
for (const id of familyAnchors) {
  assert.ok(sourceHeader.includes(`"/products-brands#${id}"`), `Family missing from top dropdown: ${id}`);
  assert.ok(brandOverview.includes(`id: "${id}"`), `No brand section matching ${id}`);
  assert.ok(sitemapHtml.includes(`href="/products-brands#${id}"`), `Family missing from HTML sitemap: ${id}`);
}
assert.ok(sourceHeader.includes("max-h-[calc(100vh-7rem)]"), "Large desktop dropdown must scroll");

const logoFavicon = await readFile(join(outDir, "favicon.svg"), "utf8");
assert.match(logoFavicon, /#FFAD01/i, "ANVA SVG favicon does not use the company mark");
const faviconFiles = [
  "index.html",
  "products/bildal-airfield-lighting/index.html",
  "products/power-rectifiers-semiconductors/index.html",
  "products/welding-cables/index.html",
  "marine-capabilities/index.html",
  "privacy/index.html",
  "sitemap/index.html",
  "products/index.html",
  "brands/index.html",
];
for (const file of faviconFiles) {
  const html = await readFile(join(outDir, file), "utf8");
  assert.match(html, /rel="icon" type="image\/svg\+xml" href="\/favicon\.svg\?v=20261109"/,
    `Missing ANVA logo favicon on ${file}`);
}
for (const route of ["products", "brands"]) {
  const html = await readFile(join(outDir, route, "index.html"), "utf8");
  assert.match(html, /url=\/products-brands/, `Legacy route ${route} does not redirect to Products overview`);
}

await stat(join(outDir, "product-landing.css"));
await stat(join(outDir, "assets"));
console.log(`ANVA static build checks passed for ${pages.length} canonical pages and ${Object.keys(aliases).length} aliases.`);

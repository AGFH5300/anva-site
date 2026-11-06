import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import type { Plugin } from "vite";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Render Static Sites need route entry points when a dashboard rewrite is unavailable.
// The copied HTML bootstraps the SAME React application for all supported deep links.
// It contains no legacy marketing/contact placeholders.
const routeAliases: Record<string, string> = {
  products: "products-brands",
  brands: "products-brands",
  "green-shipping": "green-shipping-solutions",
};

const routeMetadata: Record<string, { title: string; description: string }> = {
  about: {
    title: "About ANVA Marine | Marine Support Company Dubai",
    description: "Learn about Advanced Nautical Ventures FZE, a Dubai-based marine support company serving shipowners, ship managers, shipyards and technical teams.",
  },
  contact: {
    title: "Contact ANVA Marine | Request a Marine Service or Spares Quote",
    description: "Contact ANVA Marine in Dubai for ship repair support, riding squads, marine spares, drydocking and technical service enquiries.",
  },
  services: {
    title: "Marine Services, Drydocking and Ship Repair | ANVA Marine",
    description: "Explore ANVA Marine drydocking, ship repair, riding squads, marine project management, technical and procurement consultancy services.",
  },
  "services/riding-squads": {
    title: "Marine Riding Squads and Onboard Repairs | ANVA Marine",
    description: "Marine riding squads and onboard repair team support for vessel attendance, voyage repairs, planned maintenance and pre-drydocking work.",
  },
  "products-brands": {
    title: "Marine Equipment, Products and Brands | ANVA Marine",
    description: "Browse ANVA Marine equipment and specialist sourcing areas, including monitoring systems, hydraulics, cargo gauging and marine spares.",
  },
  "green-shipping-solutions": {
    title: "Green Shipping and Vessel Efficiency Solutions | ANVA Marine",
    description: "Discover ANVA Marine support for vessel efficiency technology, flowmeters, fuel monitoring, bunker measurement and retrofit planning.",
  },
  "spares/engine-room-machinery": {
    title: "Engine Room and Machinery Spares | ANVA Marine",
    description: "Marine engine room and machinery spares sourcing for ships, including manufacturer references, part identification and urgent requirements.",
  },
  "spares/hard-to-source-oem": {
    title: "Hard-to-Source Marine OEM Spares | ANVA Marine",
    description: "ANVA Marine helps source obsolete, rare and urgent OEM vessel spares using maker, model, serial and part details.",
  },
};

// Each static deep-link entry gets page-specific metadata instead of the homepage head.
function createRouteHtml(baseHtml: string, route: string): string {
  const canonicalRoute = routeAliases[route] ?? route;
  const info = routeMetadata[canonicalRoute];
  if (!info) throw new Error(`Missing metadata for static route: ${route}`);

  const canonicalUrl = `https://www.anva-group.com/${canonicalRoute}`;
  const escapeHtml = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const replaceRequired = (input: string, pattern: RegExp, replacement: string) => {
    if (!pattern.test(input)) throw new Error(`Missing HTML metadata tag for ${route}: ${pattern}`);
    return input.replace(pattern, () => replacement);
  };

  let output = baseHtml;
  output = replaceRequired(output, /<title>[^<]*<\/title>/, `<title>${escapeHtml(info.title)}</title>`);
  output = replaceRequired(output, /<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${escapeHtml(info.description)}" />`);
  output = replaceRequired(output, /<link rel="canonical" href="[^"]*"\s*\/?\s*>/, `<link rel="canonical" href="${canonicalUrl}" />`);
  output = replaceRequired(output, /<meta property="og:title" content="[^"]*"\s*\/?\s*>/, `<meta property="og:title" content="${escapeHtml(info.title)}" />`);
  output = replaceRequired(output, /<meta property="og:description" content="[^"]*"\s*\/?\s*>/, `<meta property="og:description" content="${escapeHtml(info.description)}" />`);
  output = replaceRequired(output, /<meta property="og:url" content="[^"]*"\s*\/?\s*>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  return output;
}

const staticRoutes = [
  "about",
  "contact",
  "services",
  "services/riding-squads",
  "products",
  "brands",
  "products-brands",
  "green-shipping",
  "green-shipping-solutions",
  "spares/engine-room-machinery",
  "spares/hard-to-source-oem",
];

function staticRouteEntries(): Plugin {
  return {
    name: "anva-static-route-entries",
    apply: "build",
    async closeBundle() {
      const output = path.resolve(import.meta.dirname, "dist/public");
      const html = await readFile(path.join(output, "index.html"), "utf8");
      for (const route of staticRoutes) {
        const routeDir = path.join(output, route);
        const routeHtml = createRouteHtml(html, route);
        await mkdir(routeDir, { recursive: true });
        await writeFile(path.join(routeDir, "index.html"), routeHtml);
        // Render's clean-URL resolver may prefer /route.html over /route/index.html.
        // /contact.html is intentionally a legacy redirect in client/public.
        if (route !== "contact") {
          await writeFile(path.join(output, `${route}.html`), routeHtml);
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    staticRouteEntries(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

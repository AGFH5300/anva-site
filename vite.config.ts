import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import type { Plugin } from "vite";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { SITE_URL, routeAliases, routeMetadata } from "./shared/siteMetadata";

// Render Static Sites need route entry points when a dashboard rewrite is unavailable.
// The copied HTML bootstraps the SAME React application for all supported deep links.
// It contains no legacy marketing/contact placeholders.
// Each static deep-link entry gets page-specific metadata instead of the homepage head.
function createRouteHtml(baseHtml: string, route: string): string {
  const canonicalRoute = routeAliases[route] ?? route;
  const info = routeMetadata[canonicalRoute];
  if (!info) throw new Error(`Missing metadata for static route: ${route}`);

  const canonicalUrl = `${SITE_URL}/${canonicalRoute}`;
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

// Legacy URL aliases must produce real redirects, not cloned React bootstrap HTML.
// A cloned /products/ entry may miss a route after trailing-slash normalization
// and silently render the homepage, which is confusing for product buyers.
function createAliasRedirectHtml(target: string): string {
  const destination = `/${target}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,follow">
<meta http-equiv="refresh" content="0;url=${destination}">
<link rel="canonical" href="${SITE_URL}${destination}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=20261109">
<title>ANVA Marine — Redirecting</title>
</head>
<body><main><p>Continue to <a href="${destination}">ANVA Marine Products &amp; Services</a>.</p></main></body>
</html>`;
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
        const routeHtml = routeAliases[route]
          ? createAliasRedirectHtml(routeAliases[route])
          : createRouteHtml(html, route);
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

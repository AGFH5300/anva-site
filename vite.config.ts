import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import type { Plugin } from "vite";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Render Static Sites need route entry points when a dashboard rewrite is unavailable.
// The copied HTML bootstraps the SAME React application for all supported deep links.
// It contains no legacy marketing/contact placeholders.
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
        await mkdir(routeDir, { recursive: true });
        await writeFile(path.join(routeDir, "index.html"), html);
        // Render's clean-URL resolver may prefer /route.html over /route/index.html.
        await writeFile(path.join(output, `${route}.html`), html);
      }
      // Preserve old bookmarked URLs without serving the obsolete placeholder content.
      await writeFile(path.join(output, "anva.html"), html);
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

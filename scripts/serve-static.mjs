import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

const root = resolve("dist/public");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
};
const port = Number(process.env.PORT || 4173);
const auditCsp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://images.unsplash.com",
  "connect-src 'self' https://anva-site-c5i4.onrender.com",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self' mailto:",
].join("; ");


// Match a Render-style SPA rewrite: every clean application URL receives the
// root HTML, while Vite assets and public static resources are served directly.
createServer(async (req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405).end();
    return;
  }
  try {
    const pathname = new URL(req.url ?? "/", "http://127.0.0.1").pathname;
    const file = pathname.startsWith("/assets/") ||
      ["/favicon.png", "/robots.txt", "/sitemap.xml"].includes(pathname)
      ? decodeURIComponent(pathname).slice(1)
      : "index.html";
    const absolutePath = resolve(root, file);
    if (!absolutePath.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    const bytes = await readFile(absolutePath);
    res.writeHead(200, {
      "Content-Type": mime[extname(absolutePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
      "Content-Security-Policy": auditCsp,
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    });
    res.end(req.method === "HEAD" ? undefined : bytes);
  } catch {
    res.writeHead(404).end("Not Found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`ANVA CI static server listening on 127.0.0.1:${port}`);
});

// Normalize legacy HTML links and trailing slashes before the SPA router starts.
const originalPath = window.location.pathname;
const legacyPages: Record<string, string> = {
  "/contact.html": "/contact",
  "/anva.html": "/",
};
const canonicalPath = legacyPages[originalPath] ??
  (originalPath.length > 1 ? originalPath.replace(/\/+$/, "") : originalPath);
if (canonicalPath !== originalPath) {
  window.history.replaceState(null, "", canonicalPath + window.location.search + window.location.hash);
}

import { createRoot } from "react-dom/client";
import App from "./App";
import "./globals.css";

createRoot(document.getElementById("root")!).render(<App />);

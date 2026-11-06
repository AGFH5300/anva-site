import { useEffect } from "react";
import { useLocation } from "wouter";
import {
  SITE_URL,
  defaultSiteMetadata,
  routeAliases,
  routeMetadata,
} from "../../../shared/siteMetadata";

// Some static hosting rewrites serve the root index.html for clean URLs.
// Update the document head after React routing as a reliable client-side fallback.
export function usePageMetadata() {
  const [location] = useLocation();

  useEffect(() => {
    const route = location.replace(/^\/+|\/+$/g, "");
    const canonicalRoute = routeAliases[route] ?? route;
    const metadata = routeMetadata[canonicalRoute] ?? defaultSiteMetadata;
    const canonicalUrl = `${SITE_URL}/${canonicalRoute}`;

    document.title = metadata.title;

    const setHeadMeta = (attribute: "name" | "property", key: string, value: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    setHeadMeta("name", "description", metadata.description);
    setHeadMeta("property", "og:title", metadata.title);
    setHeadMeta("property", "og:description", metadata.description);
    setHeadMeta("property", "og:url", canonicalUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [location]);
}

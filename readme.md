# ANVA Marine public website

Public site: https://www.anva-group.com

This repository contains Advanced Nautical Ventures FZE (ANVA Marine)'s public marketing website. The canonical production deployment is the Render static site `anva-site-static`, built from `main`; the older Node/Express service is retained as legacy infrastructure and is not the intended public origin.

## Local development and verification

```bash
npm ci
npm run check
npm run build
npm run test:site
```

The GitHub Actions workflows additionally run desktop/mobile Chromium regression tests. Build/deployment changes should be merged only after both site checks and browser checks pass.

## Page architecture

- React pages in `client/src/pages/` are routed by `client/src/App.tsx`; their metadata is defined in `shared/siteMetadata.ts`.
- Standalone crawler-friendly product pages and the visitor sitemap live in `client/public/products/` and `client/public/sitemap/`.
- `client/public/sitemap.xml` is the machine-readable sitemap. `/sitemap/` is the human-readable navigation directory.
- `client/src/components/site/Header.tsx` and `Footer.tsx` must link to every published product page. Anchor links for supported brand families must correspond to IDs in `client/src/pages/Brands.tsx`.
- `render.yaml` declares static route rewrites ahead of the SPA fallback. Verify actual Render Dashboard settings whenever routing changes.

## Forms, privacy and analytics

The contact form uses the public HTTPS Supabase function `anva-website-rfq`. It must never expose a service-role key or return private lead data to anonymous callers. Website pageview measurement uses `traffic.js` and `public-site-analytics` with limited, cookieless aggregate data. The public privacy notice is at `/privacy/`. Do not add cookies, visitor identity claims or fingerprinting without a separate compliance review.

## Content rules

Use verified equipment references. Stocked product **ranges** may be advertised, but confirm exact item quantity, certification and lead time before a sales commitment. The rectifier landing page intentionally does not disclose its supplier identity. Never publish guessed phone numbers, fictional testimonials, invented vessel case studies or unsupported guarantee claims.

When adding a product category, update the relevant page or section, top menu, footer, machine-readable sitemap and human sitemap, then run all QA before deploying.

# SEO Checklist for New Public Pages

Use this when adding a service, product, case study, guide, or other public page. Keep claims factual and owner-approved.

## Preserve the approved design

- [ ] Record the current version/commit and capture full-page screenshots before changing a public page at 375 × 812, 390 × 844, 768 × 1024, 1440 × 900 and 1920 × 1080, including relevant menu and interaction states.
- [ ] Compare post-change captures against the same baseline; inspect layout, type, spacing, imagery, responsive behavior, transitions and interactions. Do not refresh the baseline to hide a regression.
- [ ] If browser/screenshot tooling is unavailable, record visual preservation as unverified and limit implementation to clearly non-visual metadata, JSON-LD, sitemap, robots, documentation and static validation. Defer rendering-affecting HTML/CSS/JavaScript or media changes.
- [ ] Do not introduce visible copy, headings, links, sections, pages, or UI changes as an SEO-only edit without explicit approval.

## Before writing

- [ ] Identify one audience, one primary search intent, and one primary topic for the URL.
- [ ] Check existing pages and GSC queries to avoid cannibalising an existing page.
- [ ] Confirm service scope, locations, process, technologies, prices, credentials, outcome data, and client permissions with an owner.
- [ ] Keep legal entity, trading name, founder/director role, business age and product relationships consistent with owner-confirmed facts.
- [ ] For products without an owner-confirmed company relationship, confirm the legal owner before ownership claims or SoftwareApplication markup. For KoungaClub, PerkyLoop, Body Progress, TripMate, Kounga Test Results Dashboard and Kounga Engage, AJ&W Consulting Limited is confirmed as the company behind the product; verify product-specific commercial/support details separately.
- [ ] Add useful original information; do not create thin duplicate or doorway pages.

## Page content and accessibility

- [ ] Use a stable, readable URL and add a descriptive link from an existing page.
- [ ] Write a unique title, description, one clear H1, and logical section headings.
- [ ] Explain the offer and intended customer early; include a relevant call to action.
- [ ] Link related pages with meaningful anchor text; use real `<a href>` links.
- [ ] Give informative images descriptive alt text; use empty alt only for decorative images.
- [ ] Check keyboard operation, focus visibility, mobile layout, contrast, form labels, and reduced-motion preferences.
- [ ] Keep important text and links in initial HTML; do not make search visibility depend on animation or interaction.

## Technical metadata and media

- [ ] Include exactly one canonical URL pointing at the preferred HTTPS `www` URL.
- [ ] Keep production pages indexable, with no accidental `noindex` directive; ensure each Open Graph URL matches its canonical.
- [ ] Set Open Graph and X/Twitter metadata when the page is shareable; use an accurate image and alt text.
- [ ] Keep X/Twitter title and image consistent with Open Graph; verify social URLs use the page canonical.
- [ ] Add JSON-LD only for a relevant page type and facts visible on the page; connect entity IDs and avoid unsupported ratings, addresses, hours, and prices.
- [ ] Use responsive/compressed WebP/AVIF with a supported fallback; do not lazy-load an above-the-fold/LCP image.
- [ ] Add the canonical URL to `sitemap.xml`, with a real `lastmod` date for a meaningful content change. Never add fragments or redirect/noindex URLs.
- [ ] Keep `robots.txt` crawl access correct; remember it is not security or authentication.

## Release and regression

- [ ] Run `python scripts/check_seo.py` and the site's applicable build/tests.
- [ ] Check that public product entities point to the same official HTTPS destinations as their crawlable page links.
- [ ] Check the deployed URL returns the expected status and canonical URL; inspect mobile and desktop.
- [ ] Validate structured data with Google Rich Results Test when a Google-supported feature applies.
- [ ] Verify sitemap/indexing in Search Console and Bing Webmaster Tools; monitor actual query and conversion data.
- [ ] Do not deploy or change external webmaster/business profiles without the appropriate release/account authorization.

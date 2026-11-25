# SEO Implementation and Production Readiness Report

**Updated:** 25 November 2026
**Scope:** Existing implementation, strict-design-preservation review, static regression checks and final local/live release validation. No deployment, production infrastructure or external-account changes were made.

## Implemented and verified locally

- Corporate identity is represented as **AJ&W Consulting Limited, trading as Kounga Solutions**, an Auckland technology company established in 2017. The founder is identified as Anjana Kulasinghe, founder and director. Kounga Games is represented as a publishing brand operating under the same company.
- Four crawlable routes are present: `/`, `/services/software-development/`, `/services/test-automation/`, and `/products/`.
- The software-development page combines custom software, web applications, mobile applications and AI-enabled software under one intent to reduce overlap. The testing page covers QA and test automation, including API and integration testing. Standalone API, web, mobile and AI pages were not added because they would overlap these pages or lack distinct approved scope.
- The products page presents six products as part of the company's software portfolio and preserves each product name and official URL. Kounga Engage is featured first as the largest and latest product, based on the owner's description.
- Product `SoftwareApplication` entities identify AJ&W Consulting Limited/Kounga Solutions as creator and publisher; ItemList links to all six entities. The Organization graph connects Kounga Games as a brand. No product-specific price, operating system, availability or support claim was added. Kounga Engage's official site could not be retrieved during this update, so its card uses only the owner's description.
- Organization, Person, WebSite, WebPage, Service, ItemList and SoftwareApplication markup uses connected entity IDs and confirmed relationships. No unsupported address, operating hours, ratings or prices were added.
- The sitemap contains all four canonical routes. Homepage App Development and Kounga Engineering cards link to software development, and the compact header routes visitors through the main Services section.
- The GA4 `generate_lead` event fires only after Web3Forms reports success. It includes the selected service and form method, not contact details. Button clicks and failed submissions do not emit this conversion event.
- `python3 scripts/check_seo.py` passed for all four routes, metadata uniqueness, canonicals, local assets/links/fragments, image alt text, JSON-LD syntax/types, sitemap coverage and robots rules.
- `node --check assets/js/main.js` and `git diff --check` passed.
- The site is static and has no configured package/build script; there was no separate production build to run.

## Still awaiting account access or controlled testing

- Search Console and Bing account status, sitemap submission, selected canonical and indexing status require authorized account access.
- GA4 Realtime and a successful `generate_lead` require a controlled form submission. No form was submitted in this validation.
- Mobile/desktop Lighthouse scores and lab CWV values remain unmeasured; PageSpeed API quota was unavailable and Lighthouse could not be installed from the configured npm registry.
- Physical iPhone Safari behavior was not tested. The leadership cards and images rendered after scrolling in emulated mobile Chrome.
- Automated accessibility-tree/Axe and Google Rich Results Test checks remain to be run with suitable tools.

## Blocked by environment limitations

- Local Chrome and a temporary local HTTP server were available with authorized execution. Chrome DevTools Protocol was used for desktop/mobile rendering; Playwright was not available.
- Temporary npm installation failed with registry `E401` because the configured package registry requires authentication. The PageSpeed Insights API returned `429 RESOURCE_EXHAUSTED` with a daily quota limit of zero. No registry or security setting was bypassed.
- External account access remains unavailable for Google Search Console, Bing Webmaster Tools and GA4. No conclusion about indexing or search visibility is drawn.

## Requires business information

- Confirm remaining per-product commercial and support details before publishing them: current availability, pricing/terms, platform listings and support channels. Company ownership and the Kounga Games publishing-brand relationship are confirmed by the owner. Public footer branding remains intact on the product sites.
- Confirm the target customer, deliverables and engagement process for IT consulting before creating a dedicated consultancy page.
- Confirm current accuracy of homepage claims including 150 projects, 100% satisfaction and 24/7 support. Do not expand these claims into schema or additional copy until verified.
- Confirm privacy/consent requirements for analytics and the contact form. Do not publish confidential client details or unapproved case studies.

## Requires external account access

- Verify ownership of Google Search Console and Bing Webmaster Tools, submit the production sitemap, and inspect all four URLs.
- Confirm GA4 ID `G-C0F9498EJR` belongs to the intended property and configure conversion reporting.
- Confirm Google Business Profile eligibility and owner-approved business details.

## Not applicable

- Separate product detail pages are not appropriate yet: official product sites already contain the detailed product information. Product-specific pricing, availability and support data remain unconfirmed, so those properties are omitted from SoftwareApplication markup.
- Separate web, mobile, AI and API-test landing pages are not needed now. The software page and testing page consolidate related intents without thin or competing URLs.
- Google Rich Results Test may report no eligible rich-result feature for the current Organization, Service, ItemList and SoftwareApplication markup. Schema.org validation is still useful for syntax; valid structured data does not guarantee a rich result.
- Deployment is deliberately not performed. This report is not a release authorization.

## Production checklist and exact targets

Verify `https://www.koungasolutions.co.nz/`, `/services/software-development/`, `/services/test-automation/`, `/products/`, `/robots.txt` and `/sitemap.xml`. Run the commands in `POST-LAUNCH-SEO.md`, then check redirects, metadata, indexability, analytics and field/lab performance using the listed Google and Bing tools.

## Final release validation — 25 November 2026

### Production routes and SEO output

- All four public routes, `robots.txt` and `sitemap.xml` returned HTTP 200 over HTTPS. HTTP apex, HTTP www and HTTPS apex each redirected once to `https://www.koungasolutions.co.nz/`; the preferred HTTPS www homepage had no redirect.
- All four production pages matched the local repository on title, meta description, canonical and H1. Canonicals, `og:url` and `twitter:url` use the preferred www URL. All pages declare index/follow; `robots.txt` allows general crawling and names the sitemap.
- Production sitemap contains exactly the four canonical routes. Production JSON-LD parses on all routes. The products page lists all six software applications and connects each creator/publisher to the Kounga Solutions organization ID. All six official product destinations returned HTTP 200 to HEAD requests.
- The remaining external destinations checked by HEAD also returned HTTP 200. Static local-link and fragment checks pass.
- Gzip was returned for all four HTML pages with `Cache-Control: max-age=600` and ETags. Compressed document-body sizes were 7,089 bytes (home), 3,217 bytes (software development), 3,422 bytes (test automation) and 3,605 bytes (products). These exclude CSS, JS, fonts, images and other resources; total page transfer size/request counts were not measured.

### Local browser and validation results

- Chrome DevTools Protocol rendered all four pages at 390 × 844 mobile and 1440 × 900 desktop. Mobile navigation opened and closed with Escape on each tested route. There were no page console errors or HTTP error responses for local assets. No contact form was submitted.
- Full-page screenshots after scrolling are in `/tmp/kounga-validation/screenshots/`. The homepage leadership cards and WebP portraits were visible and loaded after actual scrolling in emulated mobile Chrome. No horizontal body overflow was observed at the tested 390 px width. Physical iPhone Safari remains untested.
- The W3C Nu HTML checker on the public production URLs reported three homepage errors: autocomplete on the hidden checkbox honeypot; the empty selected service option has no label; and an `h4` follows an `h2` without an `h3`. The three service/product pages reported no HTML errors. Nu reported redundant navigation/contentinfo role warnings on all four pages. These findings were not changed.
- `python3 scripts/check_seo.py`, `node --check assets/js/main.js` and `git diff --check` pass. JSON-LD was parsed and its ownership relationships checked; no Google rich-result eligibility test was run.

### Performance, analytics and search status

- Lighthouse/PageSpeed scores and laboratory LCP, CLS, FCP and TBT were not obtained. The PageSpeed API returned HTTP 429 with a zero daily quota; installing temporary Lighthouse/Playwright packages failed with npm registry `E401`. No lab metrics or real-user CWV are claimed.
- The site code emits `generate_lead` only after a successful form response, but production form behavior and GA4 receipt were not exercised. The initial local browser pass attempted page-view beacons; they were observed as `ERR_ABORTED`. Later browser scroll/capture passes blocked analytics endpoints. No lead event or enquiry was intentionally generated.
- Search Console, Bing Webmaster Tools, live indexing and search visibility could not be inspected without account access. This is an access limitation, not a website defect.

### Release assessment

No confirmed broken route, crawl-blocking directive, canonical mismatch, JSON-LD parse failure, official product-link failure, browser console error or reproduced mobile leadership defect was found. The three homepage HTML conformance errors are confirmed, pre-existing findings outside this SEO diff; review them before release. No automatic fixes, production changes or external-account changes were made. The recommendation is **CONDITIONAL GO** pending review of those errors and collection of Lighthouse results in an environment with an available runtime. See `POST-LAUNCH-SEO.md` for exact remaining account and measurement steps.

## Strict design-preservation SEO review — 25 November 2026

### Work completed

- Inspected the clean `main` working tree, static GitHub Pages architecture, all four public HTML routes, current SEO documentation, sitemap, robots policy, and the existing CI workflow.
- Expanded `scripts/check_seo.py` so CI also catches missing or mismatched social metadata, a missing or accidental `noindex` directive, duplicate IDs, and product entities without unique HTTPS destinations linked from the product directory.
- Corrected HTML entity escaping in the homepage Google Fonts URL. The browser-decoded URL is unchanged; no visible content, style, layout or behavior was intentionally changed.
- Updated the audit, strategy, growth plan, reusable checklist and this report. Added [SEO-CONTENT-RECOMMENDATIONS.md](SEO-CONTENT-RECOMMENDATIONS.md) to keep content and design-dependent opportunities separate from implementation.
- Current qualitative search discovery suggests service pages in the market often publish more specific deliverables and project evidence. This is not a ranking, traffic or keyword-volume study; recommendations require factual approval.

### Static validation results

- `python3 scripts/check_seo.py` — **passed**: 4 HTML routes, 15 images and 4 sitemap routes; metadata/indexability/social fields, local references/fragments, JSON-LD, product ownership/link consistency, sitemap and robots checks.
- `node --check assets/js/main.js` — **passed**.
- `git diff --check` — **passed**.
- HTML Tidy is present but is an obsolete validator in this environment; it rejects standard HTML5 elements (`main`, `nav`, `section`, `picture`, `canvas`) as unknown. It cannot provide a reliable HTML5 conformance result, so HTML validity remains unverified by a conforming validator.
- Existing `.github/workflows/seo-check.yml` runs the dependency-free SEO check on pull requests and pushes to `main`; no new CI dependency was added.

### Visual, browser and performance validation

- Browser, production HTTP, sitemap, outbound link and HTML5 checks are recorded in the final release validation above. No pre-change screenshot baseline exists for a pixel comparison.
- No CSS, JavaScript presentation, assets or visible copy were changed for the SEO review. The homepage font URL entity correction decodes to the same URL.
- Lighthouse and field Core Web Vitals remain unmeasured. No Search Console/Bing/GA4 account access or real form submission was used.

### Release assessment and outstanding actions

Repository-side SEO checks pass and production routes, redirects, metadata, sitemap, crawler directives and structured-data parsing were verified. The documented **CONDITIONAL GO** and outstanding validation limits are in the final release section above. Deployment and external account changes were not performed.

Content recommendations requiring visible changes, verified service detail, or product-specific commercial/support information are in [SEO-CONTENT-RECOMMENDATIONS.md](SEO-CONTENT-RECOMMENDATIONS.md). They are not implementation defects and were not applied.

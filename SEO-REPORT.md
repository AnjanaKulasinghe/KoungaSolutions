# SEO Implementation and Production Readiness Report

**Updated:** 25 November 2026
**Scope:** Phase 1–3 implementation plus Phase 4 read-only production verification. No production changes or external account changes were made.

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

## Implemented but awaiting production verification

- Confirm the deployed homepage and three subpages return HTTP 200, use the expected canonicals, load assets, and do not redirect incorrectly between apex and `www`.
- Confirm HTTPS, `robots.txt`, sitemap retrieval, browser rendering, responsive layouts, navigation, accessibility, and contact form behavior on the deployed site.
- Confirm GA4 Realtime receives page views and `generate_lead` after a successful test submission; configure the event as a conversion if desired.
- Run PageSpeed Insights/Lighthouse on the deployed routes and record actual mobile/desktop values. No score or Core Web Vitals outcome is claimed here.
- Inspect indexability and canonical selection in Search Console and Bing after publication.

## Blocked by environment limitations

- Starting `python3 -m http.server 8765 --bind 127.0.0.1` was denied by the sandbox with `PermissionError: [Errno 1] Operation not permitted` while binding a socket. No alternate server or browser binary/package was available. No security restriction was bypassed.
- Python and Node are available, but no browser, browser automation package, local HTTP-server package or Lighthouse executable is installed. A second HTTP server would require the same restricted socket bind, so it was not used to bypass the limitation. Consequently local HTTP status, browser rendering, Lighthouse, mobile viewport, screen-reader, JavaScript console and end-to-end form checks were not run. Exact local commands for a developer machine are in `POST-LAUNCH-SEO.md`.
- Network policy and unavailable account access prevent live domain redirect/DNS, Search Console, Bing, GA4, Rich Results and indexing verification.

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

## Phase 4: Production reachability observed from this environment

- **Direct HTTP status and redirects:** Not verified. `curl` requests for `www`, apex, all four pages, `robots.txt` and `sitemap.xml` returned status `000` because this sandbox could not resolve either domain (`curl: (6) Could not resolve host`). This is an environment DNS failure, not evidence of a production HTTP status.
- **Cached public page snapshot:** The web reader returned a homepage snapshot marked “Crawled: 4 weeks ago.” It shows the older header and old “Founder & CEO” content, not the current repository header. This snapshot is stale relative to the repository commit and cannot establish current production HTML.
- **New production routes:** Direct web-reader requests to `/services/software-development/`, `/services/test-automation/` and `/products/` were inaccessible to that reader. This does not establish 404 responses.
- **Repository comparison:** Local `main` is clean at commit `de9460f`; the header anchors point to `/services/software-development/`, `/services/test-automation/` and `/products/`, and all corresponding `index.html` files exist. The mobile-menu click handler closes the menu without cancelling the link's default navigation. No broken local href was found.
- **Likely explanation for the reported header behavior:** The available public snapshot is serving/caching an older version, while this environment cannot check the actual live response. A stale or mismatched Pages artifact/cache is more likely than a broken route in the current source, but the production cause remains unconfirmed until the URLs are checked from a networked browser or shell.
- **PageSpeed/Lighthouse, browser, console, responsive, accessibility and form testing:** Not run. The PageSpeed API and public reader were inaccessible for current reports; no browser/Lighthouse runtime is available. No form was submitted and no GA4 event was generated.
- **Search Console, Bing and GA4 accounts:** Not available. No conclusion about current indexing or search visibility is drawn from the limited search sample.

For the next production check, use the live `curl -I` commands and Pages source/deployment troubleshooting steps in `POST-LAUNCH-SEO.md`. Do not change route hrefs unless an HTTP response confirms a real path mismatch.

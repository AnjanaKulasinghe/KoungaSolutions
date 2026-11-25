# SEO Audit

**Updated:** 26 November 2026. The sections dated 25 November below preserve the prior four-route audit baseline; the three routes added on 26 November are covered in the incremental update at the end of this audit.
**Scope:** Repository-side technical, metadata, structured-data and search-intent review under strict visual-preservation constraints. Search Console, analytics accounts, server logs, local browser rendering, Lighthouse and real-user field data were unavailable.

## Business and search context

- **Legal entity:** AJ&W Consulting Limited, trading as Kounga Solutions (business information supplied by the owner in the Phase 3 brief).
- **Publishing brand:** Kounga Games operates under the same legal company.
- **Established:** 2017, per the owner-provided brief and existing site.
- **Leadership:** Anjana Kulasinghe, male founder and director.
- **Business:** Auckland, New Zealand technology company providing professional services and developing software products.
- **Primary conversion:** Successful submission of the existing contact form.
- **Hosting/code:** Static HTML/CSS/JavaScript on GitHub Pages, using `www.koungasolutions.co.nz` as the canonical host.
- **Analytics:** Existing GA4 ID `G-C0F9498EJR`; Bing verification file exists. External property access was unavailable.

## Current crawlable architecture

| Route | Search intent and content | Structured data |
|---|---|---|
| `/` | Corporate overview, service summary, company identity, team, trust content and enquiry form | Organization, Person, WebSite, WebPage |
| `/services/software-development/` | Consolidated custom software, web app, mobile app and AI-enabled software offer | WebPage, Service |
| `/services/test-automation/` | Software QA, UI/mobile automation, API/integration, performance and delivery-pipeline testing | WebPage, Service |
| `/products/` | Company software-product portfolio with links to official product sites | WebPage, ItemList, SoftwareApplication |
| `/services/it-consulting/` | IT consulting, technology stack and technology strategy | WebPage, Service |
| `/services/branding-design/` | Strategic branding, graphic design and visual identity | WebPage, Service |
| `/services/it-support/` | Business technology support and system continuity | WebPage, Service |

The service architecture intentionally combines web, mobile, custom software and AI-enabled software on one development page. QA and API automation remain together on the testing page. Separate URLs for each overlapping capability would add little distinct information and risk cannibalization.

The November 25 audit recorded consulting, branding/design and support as homepage-only topics. Dedicated pages for those existing offers were added on November 26 after the owner requested child pages. Their metadata and schema use only the existing offer descriptions; more detailed deliverables, customer eligibility and engagement boundaries still need owner confirmation before the visible copy is expanded.

## Identity and product evidence

The homepage now visibly identifies AJ&W Consulting Limited as trading as Kounga Solutions and Anjana Kulasinghe as founder and director. Organization/Person JSON-LD connects the company, founder and professional profile. Kounga Games is represented as a Brand under that Organization. The provided brief establishes these relationships; gender is represented in schema, while visible content uses the role without gendered pronouns.

The owner confirms that AJ&W Consulting Limited is the legal company behind all six products and that Kounga Games is its publishing brand. The public [founder portfolio](https://anjanakulasinghe.com/) lists design/build work across KoungaClub, PerkyLoop, Body Progress, TripMate and Kounga Test Results Dashboard. Kounga Engage is additionally identified by the owner as the company's largest and latest product and links to its [official website](https://engage.koungasolutions.co.nz/). The [Body Progress site](https://bodyprogress.koungasolutions.co.nz/) cross-links Kounga Solutions and its footer identifies Kounga Games, now understood as the company's brand. The product directory connects every SoftwareApplication's creator and publisher to the company and preserves each official product name and URL. Detailed Kounga Engage features could not be retrieved during this update, so no specific capability claims were added.

Remaining product-specific commercial and support details:

- **KoungaClub:** company ownership is confirmed; verify current plans, availability, and support channel.
- **PerkyLoop:** company ownership is confirmed; verify pilot/production availability, current commercial terms, and support channel.
- **Body Progress:** company ownership is confirmed; its public footer uses the Kounga Games brand. Verify current app availability, commercial terms, and support channel.
- **TripMate:** company ownership is confirmed; verify current availability, platform listings, commercial terms, and support channel.
- **Kounga Test Results Dashboard:** company ownership is confirmed; its public footer uses the Kounga Games brand. Verify current access model, commercial terms, and support channel.
- **Kounga Engage:** company ownership is confirmed; owner identifies it as the largest and latest product. Verify current capabilities, commercial terms, availability and support channel.

## Technical and conversion findings

- The November 25 baseline had four static pages. The current seven-page repository has unique titles/descriptions, `en-NZ`, one canonical, one H1, social metadata and internal route/assets coverage checked by the expanded SEO checker.
- Homepage Organization markup includes the legal name, 2017 founding date, founder identity and New Zealand service area; unverified address, hours, ratings and prices are omitted.
- The current sitemap lists all seven canonical routes; `robots.txt` permits crawling and advertises the sitemap.
- WebP variants reduce three large image payloads from about 8.5 MB to about 548 KB in local files (about 94% lower). This is a file-size calculation, not LCP/CWV measurement.
- GA4 `generate_lead` is sent only on a successful Web3Forms response and includes the selected service only. Failed submissions and clicks alone do not count as leads.
- The November 25 baseline checks covered four routes. The 26 November incremental update extends those checks to all seven routes and to service-provider relationships; see the latest report section for results.
- No browser or Lighthouse executable/package is available in this environment. Production HTTP, visual, accessibility, end-to-end form, field-data and indexing checks for the three new routes remain unverified.

## Production blockers and owner actions

1. Confirm product-specific availability, platform listings, pricing/terms, and support contacts before adding those details to product pages. The corporate owner and Kounga Games relationship are confirmed.
2. Confirm current homepage stats/support claims and service boundaries.
3. Confirm consulting, branding and support deliverables, eligible customer types and engagement models before expanding visible page copy or asserting response commitments.
4. Verify Search Console, Bing Webmaster Tools and GA4 access; configure lead conversion reporting and sitemap submission after deployment.
5. Review privacy/consent requirements and use customer-approved evidence only.
6. After an approved release, validate `www`/apex redirects, HTTPS, all landing pages, `robots.txt`, sitemap, analytics, form behavior, Rich Results/schema, PageSpeed and indexing.

See [SEO-REPORT.md](SEO-REPORT.md) for status categories and [POST-LAUNCH-SEO.md](POST-LAUNCH-SEO.md) for exact verification commands and URLs.

## Design-preserving audit update — 26 November 2026

The current implementation has the core on-page and technical SEO controls in place: unique page titles and descriptions, `en-NZ`, index/follow directives, canonicals, social metadata, JSON-LD connected to the confirmed company and services, seven canonical sitemap routes, and a crawl-allowing robots policy. The local regression check verifies these controls, service entity relationships, routes and product link/entity consistency.

| Finding | Classification | Action |
|---|---|---|
| Page metadata, canonicals, language, social cards, JSON-LD, sitemap and robots policy | Implemented across seven local routes | Keep the canonical host and crawl policy. New service routes now carry their own metadata and Service entities; the three routes await live verification. |
| Service metadata/entity/link consistency could silently drift | Safe to implement without visual changes | `scripts/check_seo.py` now checks all discovered service routes, shared Organization/WebSite entity IDs, Service provider/area/URL relationships, route discoverability and sitemap coverage. |
| Richer service proof, buyer questions, or product/commercial details | Requires visible content changes and verified business information | Record as recommendations only in [SEO-CONTENT-RECOMMENDATIONS.md](SEO-CONTENT-RECOMMENDATIONS.md). |
| Search performance, selected canonicals, sitemap fetches, CWV and conversion attribution | Requires external account access or production telemetry | No conclusions about ranking/indexing or field performance; follow [POST-LAUNCH-SEO.md](POST-LAUNCH-SEO.md) after an authorised release. |
| Screenshot comparison and real-device/browser behavior | Requires browser tooling | Not available in this environment. This incremental SEO update changes metadata and JSON-LD only; no visible copy, presentation or interaction changes were made. Formal visual regression remains unverified. |

### Search intent and market evidence

The keyword map is qualitative and reflects the current offers and a current public-search sample, not measured volumes, difficulty, rankings, or share of voice. The visible market sample includes Auckland software/app firms describing custom software, web, mobile and AI capabilities, including [Putti](https://www.puttiapps.com/), [Orchid](https://www.orchid.co.nz/) and [RR Tech](https://www.rrtech.co.nz/app-development). QA/testing providers such as [UTUM](https://www.utum.co.nz/) and [Pattern](https://www.pattern.co.nz/services/development/testing-qa/) publish specific testing methods and deliverables. These are examples of public positioning, not a definitive competitor or ranking set.

The strategic opportunity is to substantiate the five Auckland/NZ service intents with owner-approved scope, delivery detail and evidence. The three new landing pages use existing service descriptions; do not add further visible copy, FAQs, claims, locations or customer references until approved and fact-checked. Keyword and content recommendations are recorded separately; no volume estimates or ranking targets are inferred.

## Incremental new-service update — 26 November 2026

- The three new routes are `/services/it-consulting/`, `/services/branding-design/` and `/services/it-support/`. Together with home, products, software development and test automation, the repository contains seven canonical, indexable routes.
- The new pages now have unique titles/descriptions, preferred absolute canonicals, index/follow, Open Graph and X/Twitter fields, the existing GA4 ID, and one `WebPage` plus one `Service` entity each. `Service.provider` references the existing `https://www.koungasolutions.co.nz/#organization`; webpage relationships use the shared `#website` ID. Service areas are limited to Auckland and New Zealand.
- The dynamic SEO checker covers all service routes, shared entity identity, indexability, social fields, internal route discoverability, local references, fragments and sitemap completeness. The existing CI workflow already runs this checker; no workflow change is needed.
- `sitemap.xml` contains seven unique canonical routes. `robots.txt` remains unchanged: its wildcard rule allows crawling and its existing sitemap declaration is correct; no AI search or model-training crawler preferences were changed.
- The homepage links to each service page. More contextual cross-links between related service pages could help users and crawlers but would add visible links; do not add without approval.
- Newly observed qualitative competitor positioning: [Tech Partners](https://www.techpartners.co.nz/) describes IT strategy/roadmaps; [Brandspired](https://www.brandspired.co.nz/) describes brand strategy and identity; [NATC](https://www.natc.co.nz/) and [Action IT](https://www.actionit.co.nz/) describe business IT support. This sample informs keyword language only; it is not rank, volume or market-share evidence.
- The new pages are local repository changes and have not been deployed or checked against production. No browser was available, so visual rendering and Lighthouse/CWV checks were not performed. The SEO-only edits do not alter visible copy or presentation.

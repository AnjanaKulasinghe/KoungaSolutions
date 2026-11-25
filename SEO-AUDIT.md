# SEO Audit

**Updated:** 25 November 2026
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

The service architecture intentionally combines web, mobile, custom software and AI-enabled software on one development page. QA and API automation remain together on the testing page. Separate URLs for each overlapping capability would add little distinct information and risk cannibalization.

IT consulting, branding/design and support remain on the homepage. A standalone IT consulting page needs confirmed deliverables and engagement scope. Separate branding/support pages also need factual depth and approved boundaries before they would help prospective customers.

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

- All four static pages have unique titles/descriptions, `en-NZ`, one canonical, one H1, social metadata and a working internal route/assets check.
- Homepage Organization markup includes the legal name, 2017 founding date, founder identity and New Zealand service area; unverified address, hours, ratings and prices are omitted.
- Sitemap lists exactly the four canonical routes; `robots.txt` permits crawling and advertises the sitemap.
- WebP variants reduce three large image payloads from about 8.5 MB to about 548 KB in local files (about 94% lower). This is a file-size calculation, not LCP/CWV measurement.
- GA4 `generate_lead` is sent only on a successful Web3Forms response and includes the selected service only. Failed submissions and clicks alone do not count as leads.
- `python3 scripts/check_seo.py`, `node --check assets/js/main.js` and `git diff --check` passed locally.
- The sandbox prevented binding a local HTTP server; no browser or Lighthouse executable/package was available. Production HTTP, visual, accessibility, end-to-end form, field-data and indexing checks remain unverified.

## Production blockers and owner actions

1. Confirm product-specific availability, platform listings, pricing/terms, and support contacts before adding those details to product pages. The corporate owner and Kounga Games relationship are confirmed.
2. Confirm current homepage stats/support claims and service boundaries.
3. Define consulting, branding and support deliverables and engagement models before expanding those topics into separate landing pages.
4. Verify Search Console, Bing Webmaster Tools and GA4 access; configure lead conversion reporting and sitemap submission after deployment.
5. Review privacy/consent requirements and use customer-approved evidence only.
6. After an approved release, validate `www`/apex redirects, HTTPS, all landing pages, `robots.txt`, sitemap, analytics, form behavior, Rich Results/schema, PageSpeed and indexing.

See [SEO-REPORT.md](SEO-REPORT.md) for status categories and [POST-LAUNCH-SEO.md](POST-LAUNCH-SEO.md) for exact verification commands and URLs.

## Design-preserving audit update — 25 November 2026

The current implementation already has the core on-page and technical SEO controls in place: unique page titles and descriptions, `en-NZ`, index/follow directives, canonicals, social metadata, JSON-LD connected to the confirmed company and products, four canonical sitemap routes, and a crawl-allowing robots policy. The expanded local regression check verifies these controls and product link/entity consistency. No metadata or structured-data defect with a clear, evidence-based benefit was found that would justify changing current page output.

| Finding | Classification | Action |
|---|---|---|
| Page metadata, canonicals, language, social cards, JSON-LD, sitemap and robots policy | Already optimised | Keep the current production identity and four-route architecture. Add regression coverage; no metadata values or structured data needed changing. |
| Social metadata and indexability could silently drift | Safe to implement without visual changes | Extend `scripts/check_seo.py` to fail on missing/mismatched social fields, accidental `noindex`, duplicate IDs, or product entities without crawlable official links. |
| Richer service proof, buyer questions, or product/commercial details | Requires visible content changes and verified business information | Record as recommendations only in [SEO-CONTENT-RECOMMENDATIONS.md](SEO-CONTENT-RECOMMENDATIONS.md). |
| Search performance, selected canonicals, sitemap fetches, CWV and conversion attribution | Requires external account access or production telemetry | No conclusions about ranking/indexing or field performance; follow [POST-LAUNCH-SEO.md](POST-LAUNCH-SEO.md) after an authorised release. |
| Screenshot comparison and real-device/browser behavior | Requires browser tooling | Not available in this environment. The only HTML edit is query-parameter entity escaping for the homepage font URL; no visible content or presentation changes were made. Formal visual regression remains unverified. |

### Search intent and market evidence

The keyword map is qualitative and reflects the current offers and a current public-search sample, not measured volumes, difficulty, rankings, or share of voice. The visible market sample includes Auckland software/app firms describing custom software, web, mobile and AI capabilities, including [Putti](https://www.puttiapps.com/), [Orchid](https://www.orchid.co.nz/) and [RR Tech](https://www.rrtech.co.nz/app-development). QA/testing providers such as [UTUM](https://www.utum.co.nz/) and [Pattern](https://www.pattern.co.nz/services/development/testing-qa/) publish specific testing methods and deliverables. These are examples of public positioning, not a definitive competitor or ranking set.

The strategic opportunity is to substantiate Kounga's existing Auckland/NZ software and QA intent with owner-approved scope, delivery detail and evidence. Do not add copy, pages, FAQs, claims, locations or customer references until approved and fact-checked. Keyword and content recommendations are recorded separately; no volume estimates or ranking targets are inferred.

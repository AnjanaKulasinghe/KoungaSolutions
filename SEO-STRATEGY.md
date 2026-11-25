# SEO Strategy: Phase 3

**Updated:** 25 November 2026. Search and product research is a qualitative public-web sample, not a ranking, volume, or difficulty study.

## Positioning and audience

AJ&W Consulting Limited trades as Kounga Solutions, an Auckland technology company established in 2017, per the owner-provided Phase 3 brief. Founder and director Anjana Kulasinghe leads the company. The company provides software engineering, iOS/Android and cross-platform app development, automated QA/testing pipelines, IT consulting, web design/branding, and technology support, and it develops software products. The main conversion is a project enquiry through the contact form.

The initial market is Auckland and wider New Zealand. No other country or language version is supported by the site; keep one `en-NZ` site and do not add hreflang.

## Implemented architecture and keyword map

Intent targets are derived from page content and current search-result language. They are not volume or difficulty claims.

| Search intent | Primary topic | Target URL | Strategy/status |
|---|---|---|---|
| Broad commercial/local | software development company Auckland; custom software development Auckland | `/` | Corporate identity and service summary. More detailed software intent goes to the consolidated service page. |
| Commercial/local | custom software development Auckland; web application development NZ; mobile app development Auckland; AI software solutions NZ | `/services/software-development/` | Implemented. Combines custom software, web apps, native/cross-platform mobile apps and AI-enabled software to avoid competing thin URLs. |
| Commercial/local | software testing Auckland; test automation services NZ; API test automation; QA automation Auckland | `/services/test-automation/` | Implemented. Covers UI/mobile, API/integration, performance and pipeline QA; no separate API route is justified yet. |
| Navigational/portfolio | Kounga Solutions software products; Kounga Engage; software products developed by Kounga Solutions | `/products/` | Implemented as the company's portfolio of six products. Kounga Engage is featured as the owner's largest/latest product; product-specific commercial and support details remain to verify. |
| Commercial | IT consulting Auckland; technology strategy NZ | Homepage service summary | Homepage confirms tech-stack/strategy advice; use cases, deliverables and engagement model are missing for a standalone page. |
| Commercial | IT support Auckland; 24/7 IT support NZ | Future `/services/it-support/` | Existing site claims 24/7 support; scope, customer eligibility, response expectations and channels need confirmation. |
| Commercial | branding and graphic design Auckland | Future `/services/branding-design/` | Existing Kounga Creations card supports the offer; deliverables and current priority need confirmation. |

Do not create thin suburb pages or split near-identical terms into multiple routes. Keep one distinct search intent per URL.

## Product discovery and cross-site strategy

Anjana Kulasinghe’s public professional portfolio identifies five products as designed and built by the founder: [KoungaClub](https://www.koungaclub.com/), [PerkyLoop](https://perkyloop.com/), [Body Progress](https://bodyprogress.koungasolutions.co.nz/), [TripMate](https://tripmate.koungasolutions.co.nz/), and [Kounga Test Results Dashboard](https://dashboard.koungasolutions.co.nz/). Product sites describe club-management software, digital loyalty, fitness tracking/self-coaching, group travel planning, and test-report aggregation respectively.

The owner confirms AJ&W Consulting Limited is the legal company behind KoungaClub, PerkyLoop, Body Progress, TripMate, Kounga Test Results Dashboard and Kounga Engage. Kounga Games is a publishing brand under that same company. The directory and structured data identify the company as publisher/creator while preserving each product name and official URL. Kounga Engage is the owner's largest and latest product; its official website could not be retrieved for feature details during this update. Current availability, pricing/terms, platform listings and product-specific support arrangements still need confirmation. Do not duplicate product-site feature copy or add individual product pages while those sites already serve product intent.

Avoid cannibalisation by keeping each product’s own site as the detailed destination for its product-name and end-user intent. The corporate `/products/` page is a short portfolio index for company product-development work and cross-site discovery. It deliberately does not duplicate product feature pages or publish changing commercial details. Its `ItemList` links to six `SoftwareApplication` entities whose creator and publisher are the confirmed legal company; prices, operating systems, availability and support details are omitted until product-specific information is confirmed.

**Product page completion information needed:** confirm for each product (a) current availability, (b) current pricing, commercial terms and sales path, (c) support contact and service arrangements, (d) platform/store listing URLs, and (e) permission to use screenshots/logos. Company ownership and the Kounga Games brand relationship are confirmed. Do not edit external product websites from this repository task.

## Competitor/reference research

Public search discovery on 25 November 2026 surfaced these businesses for NZ/Auckland testing and QA intent. The sample is qualitative and does not establish ranking positions, search volumes, keyword difficulty or market share:

- [UTUM](https://www.utum.co.nz/): test-engineering consultancy; its public page lists automation, REST API testing, CI/CD integration and test management.
- [Pattern](https://www.pattern.co.nz/services/development/testing-qa/): QA page explains test types and deliverables, including end-to-end testing.
- [Resync](https://resync.nz/services/): independent NZ QA practice with segmented services and published case outcomes.
- [TestPilot](https://www.testpilot.nz/): flexible specialist QA/testing support and engagement positioning.
- [Orchid](https://www.orchid.co.nz/), [Putti](https://www.puttiapps.com/), and [RR Tech](https://www.rrtech.co.nz/app-development): Auckland providers with custom software, web/mobile app and project-positioning detail.

The current service pages cover the primary relevant search intents, but the public market sample shows that some competitors publish more concrete deliverables, project evidence and engagement scope. This is a content opportunity only, not a reason to add unverified claims or copy competitor positioning. Detailed recommendations with benefits, impact, complexity and approvals are in [SEO-CONTENT-RECOMMENDATIONS.md](SEO-CONTENT-RECOMMENDATIONS.md).

## Content authority and next pages

1. Prioritise the two service pages now in place: consolidated software/application development and quality engineering. Validate both against actual enquiries and GSC data after release.
2. Keep consulting, support and design as homepage topics until service scope, deliverables, target customers and differentiation are confirmed.
3. Gather permissioned case-study information: client consent, challenge, Kounga role, solution, attributable outcome, timeframe and logo/image use.
5. Add FAQs based on actual customer questions. Use visible HTML answers; do not add FAQ rich-result markup merely for appearance.
6. Publish technical guides only when an expert can review them and they offer first-hand value, such as API contract testing or choosing regression coverage.

All proposed copy, case studies, FAQs, service pages and product-detail additions remain recommendations. Strict design preservation is the active baseline; implementation needs explicit content/design approval and verified facts.

## Internal linking and conversion

The homepage links directly to software development, test automation and the product portfolio. Both service pages link to the existing contact form; the product directory links to the official product destinations. No screenshots are copied. The short summaries provide directory context without reproducing full product-site content.

GA4 already uses `G-C0F9498EJR`; that same ID is on all four indexable routes. A `generate_lead` event fires only after successful contact-form submission and includes only the chosen service value, not name/email/phone/message. Confirm the event in the account and configure it as a conversion; respect the existing privacy/consent requirements.

## Local and international SEO

- Keep Auckland and New Zealand service areas consistent with verified company copy.
- Do not publish a street address, coordinates, hours, ratings or `LocalBusiness` address markup until the business confirms accurate customer-facing details.
- Confirm Google Business Profile eligibility, service-area settings, category, phone, hours and website with the owner.
- Keep `en-NZ`; no translated/regional URLs exist.

## AI search and crawler policy

Google’s [AI Search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) points to the same crawl/index/search foundations; [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) emphasize accurate URLs, content and crawl signals. The current `robots.txt` wildcard allows OAI-SearchBot, PerplexityBot and other crawlers at the robots layer; GPTBot is not explicitly blocked. This preserves the prior policy. [OpenAI publisher guidance](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) distinguishes search discovery from model-training crawlers; [Perplexity guidance](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) distinguishes PerplexityBot from user-triggered fetching. No host/WAF rules were available to inspect.

## Off-page and measurement plan

- Verify Search Console and Bing Webmaster Tools accounts, then monitor index state, canonical selection, sitemap status, query/page impressions, clicks and CTR.
- Confirm the GA4 property and successful-lead event. Use qualified enquiries rather than raw sessions as the main conversion measure.
- Complete an accurate Google Business Profile if eligible; use only legitimate NZ industry and regional listings.
- Request honest reviews from real clients. Do not add self-controlled review/aggregate-rating schema.
- Seek client-approved case-study citations and relevant industry mentions; no paid link schemes or bulk submissions.
- Compare Auckland vs wider NZ queries only after the GSC baseline is available. Do not invent search volumes or rank targets.

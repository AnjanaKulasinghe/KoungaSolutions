# Production SEO Verification Checklist

Use after an authorized release. Production was checked read-only on 25 November 2026 and matched the then-current repository across four public routes. Three more service pages were added on 26 November and are not yet verified or known to be deployed. Historical observations below remain scoped to the November 25 four-route production snapshot. Re-run checks after the next authorized release; do not deploy or alter external accounts without the appropriate authorization.

## 1. Local site and code checks

From the repository root:

```bash
python3 scripts/check_seo.py
node --check assets/js/main.js
git diff --check
python3 -m http.server 8000 --bind 127.0.0.1
```

The first three commands should exit successfully. In a second terminal, check static route responses:

```bash
for path in / /services/software-development/ /services/test-automation/ /services/it-consulting/ /services/branding-design/ /services/it-support/ /products/ /robots.txt /sitemap.xml; do
  curl -fsS -o /dev/null -w "$path %{http_code}\n" "http://127.0.0.1:8000$path"
done
```

Expected result: nine `200` responses. Open `http://127.0.0.1:8000/` in a browser and inspect all seven HTML routes at desktop and mobile widths. Check navigation, internal links, image loading, keyboard/focus behavior, reduced-motion behavior, form validation and browser console errors. Do not send a real form message from the local copy unless using an agreed test address and authorized to test the live Web3Forms endpoint.

**Observed local results, 25 November 2026:** SEO regression check passed for 4 pages, 15 images and 4 sitemap routes; JavaScript syntax and `git diff --check` passed. A temporary local server returned 200 for all four routes, robots and sitemap. Chrome DevTools Protocol rendered all four routes at mobile 390 × 844 and desktop 1440 × 900; no page console errors or local resource HTTP errors were found. Mobile navigation opened and closed with Escape. The contact form was not submitted. Screenshots are in `/tmp/kounga-validation/screenshots/`. The homepage's leadership cards and portraits appeared after scrolling in mobile emulation; this does not replace physical iPhone Safari testing.

**Incremental local results, 26 November 2026:** the repository SEO checker passes for 7 pages, 21 images and 7 sitemap routes; JavaScript syntax, sitemap XML parsing and `git diff --check` also pass. A temporary localhost server returned HTTP 200 for all seven routes, `robots.txt` and `sitemap.xml`. The three new service routes were not visually rendered because no browser executable is installed. HTML Tidy is an obsolete 2006 build that rejects standard HTML5 elements, so it does not provide an HTML5 conformance result. Previous production observations below remain scoped to the four routes checked on November 25.

## 2. Production HTTP, HTTPS and domain redirects

Check the preferred host and paths:

```bash
for url in \
  https://www.koungasolutions.co.nz/ \
  https://www.koungasolutions.co.nz/services/software-development/ \
  https://www.koungasolutions.co.nz/services/test-automation/ \
  https://www.koungasolutions.co.nz/services/it-consulting/ \
  https://www.koungasolutions.co.nz/services/branding-design/ \
  https://www.koungasolutions.co.nz/services/it-support/ \
  https://www.koungasolutions.co.nz/products/ \
  https://www.koungasolutions.co.nz/robots.txt \
  https://www.koungasolutions.co.nz/sitemap.xml; do
  curl -sS -o /dev/null -w "%{http_code} %{url_effective}\n" "$url"
done
curl -sSIL https://koungasolutions.co.nz/
```

Expected: preferred `www` URLs return 200; apex redirects once to the preferred HTTPS host with no loop. Repeat for `http://koungasolutions.co.nz/` and `http://www.koungasolutions.co.nz/`. For each HTML URL, view source and confirm its single canonical matches the exact URL above.

**Observed production results, 25 November 2026:** all four HTML pages, `robots.txt` and `sitemap.xml` returned 200. HTTP apex, HTTP www and HTTPS apex each redirected once to the HTTPS www homepage; HTTPS www returned directly with 200. Each production page's title, description, canonical and H1 matched the pending repository version.

If a header link is visible but its destination fails, copy the link's actual `href` and request that exact path directly. A `404` means the published artifact or path is wrong; confirm the GitHub Pages deployment completed from the intended `main` commit and includes the route's `index.html` file before changing source links. If the direct route returns `200` but a cached page differs, hard-refresh or use a private browser window and verify the deployment/cache before editing the href. The current source uses root-relative links, which are correct for the canonical custom domain.

Current public landing pages (the three new pages remain pending live checks until deployment):

- `https://www.koungasolutions.co.nz/`
- `https://www.koungasolutions.co.nz/services/software-development/`
- `https://www.koungasolutions.co.nz/services/test-automation/`
- `https://www.koungasolutions.co.nz/services/it-consulting/`
- `https://www.koungasolutions.co.nz/services/branding-design/`
- `https://www.koungasolutions.co.nz/services/it-support/`
- `https://www.koungasolutions.co.nz/products/`

## 3. Robots and sitemap

- Open `https://www.koungasolutions.co.nz/robots.txt`; expect crawl access and `Sitemap: https://www.koungasolutions.co.nz/sitemap.xml`.
- Open `https://www.koungasolutions.co.nz/sitemap.xml`; after release expect valid XML containing exactly the seven public canonical routes, each once. No fragments, redirect URLs or blocked URLs should appear.
- After a URL change, update internal links and sitemap together; configure a permanent redirect if the host supports it.

**Observed production results, 25 November 2026:** robots allowed general crawling and pointed to the sitemap. The production sitemap contained exactly the four canonical pages. Recheck after deployment because this result describes the production version fetched on that date.

## 4. Structured data and page quality

- Run each deployed page through [Schema Markup Validator](https://validator.schema.org/) and inspect JSON-LD in rendered/source HTML.
- Paste each relevant URL into [Google Rich Results Test](https://search.google.com/test/rich-results). The Organization, Person, Service and ItemList graph may not qualify for a Google rich-result feature; absence of an enhancement is not itself an error.
- Inspect page source for one H1, unique title/description, `lang="en-NZ"`, canonical, Open Graph tags, accessible navigation name/state, and image alternatives.
- Use [Google PageSpeed Insights](https://pagespeed.web.dev/) for all seven production URLs in mobile and desktop modes after release. Record the report date, URL, lab results and available field/Core Web Vitals separately. Do not substitute estimated scores for measurements.

## 5. Google Search Console

Open [Google Search Console](https://search.google.com/search-console/):

1. Verify the `koungasolutions.co.nz` domain property, or the correct `https://www.koungasolutions.co.nz/` URL-prefix property.
2. Submit `https://www.koungasolutions.co.nz/sitemap.xml`; after deployment expect a successful fetch and seven discovered URLs (discovery is not an indexing guarantee).
3. Use URL Inspection on each of the seven landing URLs. Compare the user-declared canonical with Google's selected canonical, inspect crawl/index status, and request indexing only where appropriate.
4. Review Page indexing, Manual actions, Security issues, Core Web Vitals and Performance reports as data becomes available.

## 6. Bing Webmaster Tools

Open [Bing Webmaster Tools](https://www.bing.com/webmasters/), verify/import the site, and submit `https://www.koungasolutions.co.nz/sitemap.xml`. Confirm `BingSiteAuth.xml` is reachable after deployment. Review sitemap fetch, crawl/index status and search performance. Add IndexNow only if an owner-approved key and submission workflow are configured.

## 7. GA4 lead conversion

The existing site ID is `G-C0F9498EJR`. In the intended GA4 property:

1. Confirm Realtime shows a page view from each deployed landing page.
2. With permission and a controlled test lead, submit the contact form once with valid data and complete the verification challenge.
3. Confirm exactly one `generate_lead` event appears only after the form endpoint returns success. Confirm its `method` is `contact_form` and its `service` is the selected service. No name, email, phone number or message should be event parameters.
4. Confirm failed validation or a failed endpoint response does not emit `generate_lead`.
5. Mark the event as a conversion/key event if desired. Confirm consent and privacy requirements with the business before enabling additional tracking.

## 8. Lighthouse and performance baseline

Lighthouse was not available during final validation: the PageSpeed Insights API returned HTTP 429 with a zero daily quota, and temporary package installation failed with npm registry `E401`. No Performance, Accessibility, Best Practices or SEO Lighthouse scores, LCP, CLS, FCP or TBT lab metrics are claimed. No real-user Core Web Vitals data was available. The production HTML responses supported gzip, `Cache-Control: max-age=600` and ETags; compressed HTML body sizes were 7,089 bytes (home), 3,217 bytes (software development), 3,422 bytes (test automation) and 3,605 bytes (products). These are document-only sizes, not total page transfer sizes.

From a developer machine with Chrome and an npm registry available, run the default mobile and desktop Lighthouse modes for each public route:

```bash
npx --yes lighthouse https://www.koungasolutions.co.nz/ --output=html --output-path=./lighthouse-home-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/ --preset=desktop --output=html --output-path=./lighthouse-home-desktop.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/software-development/ --output=html --output-path=./lighthouse-development-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/software-development/ --preset=desktop --output=html --output-path=./lighthouse-development-desktop.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/test-automation/ --output=html --output-path=./lighthouse-testing-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/test-automation/ --preset=desktop --output=html --output-path=./lighthouse-testing-desktop.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/it-consulting/ --output=html --output-path=./lighthouse-consulting-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/it-consulting/ --preset=desktop --output=html --output-path=./lighthouse-consulting-desktop.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/branding-design/ --output=html --output-path=./lighthouse-branding-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/branding-design/ --preset=desktop --output=html --output-path=./lighthouse-branding-desktop.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/it-support/ --output=html --output-path=./lighthouse-support-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/it-support/ --preset=desktop --output=html --output-path=./lighthouse-support-desktop.html
npx --yes lighthouse https://www.koungasolutions.co.nz/products/ --output=html --output-path=./lighthouse-products-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/products/ --preset=desktop --output=html --output-path=./lighthouse-products-desktop.html
```

These commands require internet access but do not modify production or submit forms. Preserve reports with the date and environment. Lighthouse lab results are not field data; inspect CrUX/Search Console separately for real-user Core Web Vitals.

## 9. HTML conformance findings

The W3C Nu validator was run against the public URLs. The homepage reports three HTML errors: `autocomplete` on the hidden checkbox honeypot, an empty selected service `<option>` without a label, and an `h4` following an `h2` without an `h3`. The software-development, test-automation and products pages reported no HTML errors. Nu also reports redundant `navigation` and `contentinfo` roles as warnings on each page. These findings were not changed during validation; review them before release.

The three routes added on 26 November have not been run through a conforming HTML5 validator. The local Apple Tidy build is too old to validate their standard HTML5 elements. Include `/services/it-consulting/`, `/services/branding-design/` and `/services/it-support/` in the next Nu validation after deployment and record results separately from the historical four-page check above.

## 10. Business and product confirmation

Company ownership of KoungaClub, PerkyLoop, Body Progress, TripMate, Kounga Test Results Dashboard and Kounga Engage is confirmed; Kounga Games is a publishing brand under the same legal company. The directory's `SoftwareApplication` entities identify AJ&W Consulting Limited/Kounga Solutions as creator and publisher. Before adding more detail, confirm each product's current availability, pricing/terms, platform listings and support arrangements. Preserve the products' individual public names and official-site links.

See [SEO-AUDIT.md](SEO-AUDIT.md) for the evidence and [SEO-REPORT.md](SEO-REPORT.md) for implementation status categories.

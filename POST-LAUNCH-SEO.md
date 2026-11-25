# Production SEO Verification Checklist

Use after an authorized release. Current production is not assumed to contain the repository changes. Do not deploy or alter external accounts as part of this checklist without the appropriate authorization.

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
for path in / /services/software-development/ /services/test-automation/ /products/ /robots.txt /sitemap.xml; do
  curl -fsS -o /dev/null -w "$path %{http_code}\n" "http://127.0.0.1:8000$path"
done
```

Expected result: six `200` responses. Open `http://127.0.0.1:8000/` in a browser and inspect all four routes at desktop and mobile widths. Check navigation, internal links, image loading, keyboard/focus behavior, reduced-motion behavior, form validation and browser console errors. Do not send a real form message from the local copy unless using an agreed test address and authorized to test the live Web3Forms endpoint.

## 2. Production HTTP, HTTPS and domain redirects

Check the preferred host and paths:

```bash
for url in \
  https://www.koungasolutions.co.nz/ \
  https://www.koungasolutions.co.nz/services/software-development/ \
  https://www.koungasolutions.co.nz/services/test-automation/ \
  https://www.koungasolutions.co.nz/products/ \
  https://www.koungasolutions.co.nz/robots.txt \
  https://www.koungasolutions.co.nz/sitemap.xml; do
  curl -sS -o /dev/null -w "%{http_code} %{url_effective}\n" "$url"
done
curl -sSIL https://koungasolutions.co.nz/
```

Expected: preferred `www` URLs return 200; apex redirects once to the preferred HTTPS host with no loop. Repeat for `http://koungasolutions.co.nz/` and `http://www.koungasolutions.co.nz/`. For each HTML URL, view source and confirm its single canonical matches the exact URL above.

Public landing pages:

- `https://www.koungasolutions.co.nz/`
- `https://www.koungasolutions.co.nz/services/software-development/`
- `https://www.koungasolutions.co.nz/services/test-automation/`
- `https://www.koungasolutions.co.nz/products/`

## 3. Robots and sitemap

- Open `https://www.koungasolutions.co.nz/robots.txt`; expect crawl access and `Sitemap: https://www.koungasolutions.co.nz/sitemap.xml`.
- Open `https://www.koungasolutions.co.nz/sitemap.xml`; expect valid XML containing exactly the four public canonical routes, each once. No fragments, redirect URLs or blocked URLs should appear.
- After a URL change, update internal links and sitemap together; configure a permanent redirect if the host supports it.

## 4. Structured data and page quality

- Run each deployed page through [Schema Markup Validator](https://validator.schema.org/) and inspect JSON-LD in rendered/source HTML.
- Paste each relevant URL into [Google Rich Results Test](https://search.google.com/test/rich-results). The Organization, Person, Service and ItemList graph may not qualify for a Google rich-result feature; absence of an enhancement is not itself an error.
- Inspect page source for one H1, unique title/description, `lang="en-NZ"`, canonical, Open Graph tags, accessible navigation name/state, and image alternatives.
- Use [Google PageSpeed Insights](https://pagespeed.web.dev/) for all four production URLs in mobile and desktop modes. Record the report date, URL, lab results and available field/Core Web Vitals separately. Do not substitute estimated scores for measurements.

## 5. Google Search Console

Open [Google Search Console](https://search.google.com/search-console/):

1. Verify the `koungasolutions.co.nz` domain property, or the correct `https://www.koungasolutions.co.nz/` URL-prefix property.
2. Submit `https://www.koungasolutions.co.nz/sitemap.xml`; expect a successful fetch and four discovered URLs (discovery is not an indexing guarantee).
3. Use URL Inspection on each of the four landing URLs. Compare the user-declared canonical with Google's selected canonical, inspect crawl/index status, and request indexing only where appropriate.
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

## 8. Lighthouse commands (optional, from a machine with Node/network access)

The repository environment had no browser or Lighthouse executable and denied local socket binding. From a developer machine with Chrome and npm access, run:

```bash
npx --yes lighthouse https://www.koungasolutions.co.nz/ --output=html --output-path=./lighthouse-home-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/ --preset=desktop --output=html --output-path=./lighthouse-home-desktop.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/software-development/ --output=html --output-path=./lighthouse-development-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/software-development/ --preset=desktop --output=html --output-path=./lighthouse-development-desktop.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/test-automation/ --output=html --output-path=./lighthouse-testing-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/services/test-automation/ --preset=desktop --output=html --output-path=./lighthouse-testing-desktop.html
npx --yes lighthouse https://www.koungasolutions.co.nz/products/ --output=html --output-path=./lighthouse-products-mobile.html
npx --yes lighthouse https://www.koungasolutions.co.nz/products/ --preset=desktop --output=html --output-path=./lighthouse-products-desktop.html
```

These commands require an approved release and internet access. Preserve reports with the date and environment; Lighthouse lab data is not field data.

## 9. Business and product confirmation

Company ownership of KoungaClub, PerkyLoop, Body Progress, TripMate and Kounga Test Results Dashboard is confirmed; Kounga Games is a publishing brand under the same legal company. The directory's `SoftwareApplication` entities identify AJ&W Consulting Limited/Kounga Solutions as creator and publisher. Before adding more detail, confirm each product's current availability, pricing/terms, platform listings and support arrangements. Preserve the products' individual public names and official-site links.

See [SEO-AUDIT.md](SEO-AUDIT.md) for the evidence and [SEO-REPORT.md](SEO-REPORT.md) for implementation status categories.

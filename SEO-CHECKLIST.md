#  SEO Setup Checklist

Quick reference for post-launch SEO tasks.

---

##  DO THESE FIRST (This Week)

### 1. Google Search Console
- [ ] Create account: https://search.google.com/search-console
- [ ] Add property: `https://www.koungasolutions.co.nz`
- [ ] Verify ownership (HTML file or meta tag)
- [ ] Submit sitemap: `sitemap.xml`
- [ ] Check indexing status (after 24 hours)

### 2. Google Analytics 4
- [ ] Create account: https://analytics.google.com
- [ ] Set up property for your domain
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Add tracking code to `index.html`
- [ ] Test in Realtime view

### 3. Bing Webmaster Tools
- [ ] Sign up: https://www.bing.com/webmasters
- [ ] Import from Google Search Console (easiest)
- [ ] Or verify manually and submit sitemap

---

##  DO THESE NEXT (Week 2)

### 4. Google Business Profile
- [ ] Create profile: https://business.google.com
- [ ] Add business details (Hobsonville, Auckland)
- [ ] Upload photos (logo, team, office)
- [ ] Request verification postcard
- [ ] Complete profile when verified

### 5. Social Media
- [ ] Verify/create Facebook page
- [ ] Verify/create LinkedIn company page
- [ ] Verify/create Twitter/X account
- [ ] Link all profiles to website

---

##  ONGOING TASKS

### Analytics & Monitoring
- [ ] Check Search Console weekly
- [ ] Review Analytics monthly
- [ ] Monitor keyword rankings
- [ ] Track competitor rankings

### Content & Link Building
- [ ] Ask happy clients for reviews
- [ ] Get listed in NZ business directories
- [ ] Write blog posts (if adding blog)
- [ ] Share content on social media

### Technical
- [ ] Test site speed monthly
- [ ] Check for broken links
- [ ] Update content quarterly
- [ ] Keep sitemap updated

---

##  Files to Add/Edit

### Google Search Console Verification
```bash
# Save verification file from Google, then:
git add google[verification-file].html
git commit -m "Add Google Search Console verification"
git push origin main
```

### Google Analytics Code
Add to `index.html` after `<head>` tag:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Then:
```bash
git add index.html
git commit -m "Add Google Analytics 4"
git push origin main
```

---

##  Success Metrics

Track these monthly:

- [ ] Organic traffic (from Analytics)
- [ ] Search impressions (from Search Console)
- [ ] Average position for key terms
- [ ] Number of indexed pages
- [ ] Google Business Profile views
- [ ] Click-through rate (CTR)
- [ ] Conversion rate (contact form)

---

##  Quick Links

| Tool | URL | Priority |
|------|-----|----------|
| Google Search Console | https://search.google.com/search-console |  HIGH |
| Google Analytics | https://analytics.google.com |  HIGH |
| Google Business | https://business.google.com |  HIGH |
| Bing Webmaster | https://www.bing.com/webmasters |  MEDIUM |
| PageSpeed Insights | https://pagespeed.web.dev |  LOW |
| Microsoft Clarity | https://clarity.microsoft.com |  LOW |

---

**See [POST-LAUNCH-SEO.md](POST-LAUNCH-SEO.md) for detailed step-by-step instructions.**

**Current Status:** Site is live at www.koungasolutions.co.nz 

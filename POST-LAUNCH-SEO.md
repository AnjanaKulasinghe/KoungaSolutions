#  Post-Launch SEO Setup Guide

Complete these steps **after your site is live** to maximize visibility and track performance.

---

## 1 Google Search Console (Priority: HIGH)

### Why?
- Get your site indexed by Google
- Monitor search performance
- See what keywords people use to find you
- Get alerts for issues

### Steps:

1. **Go to:** https://search.google.com/search-console

2. **Add Property:**
   - Click "Add Property"
   - Select "URL prefix"
   - Enter: `https://www.koungasolutions.co.nz`
   - Click "Continue"

3. **Verify Ownership** (Choose one method):

   **Method A: HTML File (Easiest)**
   - Download verification file (e.g., `google123abc.html`)
   - Upload to your repository root
   - Push to GitHub:
   ```bash
   git add google*.html
   git commit -m "Add Google Search Console verification"
   git push origin main
   ```
   - Wait 2 minutes, click "Verify"

   **Method B: HTML Meta Tag**
   - Copy the meta tag they provide
   - Add to `<head>` section in index.html (after line 18):
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
   - Push to GitHub, click "Verify"

4. **Submit Sitemap:**
   - Once verified, go to "Sitemaps" in left menu
   - Enter: `sitemap.xml`
   - Click "Submit"
   - Status should show "Success" within 24 hours

5. **Expected Timeline:**
   - Verification: Instant
   - First data: 2-3 days
   - Full indexing: 1-2 weeks

---

## 2 Google Analytics 4 (Priority: HIGH)

### Why?
- Track visitor behavior
- See which pages are popular
- Understand your audience
- Measure conversions

### Steps:

1. **Go to:** https://analytics.google.com

2. **Create Account:**
   - Click "Start measuring"
   - Account name: "Kounga Solutions"
   - Check all data sharing settings (recommended)
   - Click "Next"

3. **Create Property:**
   - Property name: "Kounga Solutions Website"
   - Time zone: New Zealand
   - Currency: NZD
   - Click "Next"

4. **Business Details:**
   - Industry: Technology
   - Business size: Small (1-10 employees)
   - Click "Create"
   - Accept Terms of Service

5. **Set Up Data Stream:**
   - Choose "Web"
   - Website URL: `https://www.koungasolutions.co.nz`
   - Stream name: "Kounga Solutions"
   - Click "Create stream"

6. **Get Tracking Code:**
   - You'll see a "Measurement ID" like `G-XXXXXXXXXX`
   - Click "View tag instructions"
   - Copy the entire Google Analytics script

7. **Add to Your Website:**
   - Open `index.html`
   - Add this right after `<head>` tag (around line 5):

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

8. **Deploy:**
   ```bash
   git add index.html
   git commit -m "Add Google Analytics 4"
   git push origin main
   ```

9. **Verify It Works:**
   - Visit your site
   - In Google Analytics, go to Reports  Realtime
   - You should see yourself as an active user within 30 seconds

---

## 3 Bing Webmaster Tools (Priority: MEDIUM)

### Why?
- Get indexed by Bing (10-15% of NZ search traffic)
- Also feeds DuckDuckGo and Yahoo search

### Steps:

1. **Go to:** https://www.bing.com/webmasters

2. **Sign in** with Microsoft account (or create one)

3. **Import from Google Search Console:**
   - Click "Import from Google Search Console"
   - Authorize
   - Select your property
   - Click "Import"
   - **Done!** It copies all your GSC settings

   **OR Manual Setup:**
   - Click "Add Site"
   - Enter: `https://www.koungasolutions.co.nz`
   - Verify using HTML file or meta tag (same as Google)
   - Submit sitemap: `https://www.koungasolutions.co.nz/sitemap.xml`

---

## 4 Google Business Profile (Priority: HIGH for Local)

### Why?
- Appear in Google Maps
- Show up in "near me" searches
- Get reviews from customers
- FREE listing

### Steps:

1. **Go to:** https://business.google.com

2. **Create Profile:**
   - Business name: "Kounga Solutions"
   - Category: "Software Company" or "IT Consultant"
   - Add location: Hobsonville, Auckland
   - Service area: All of Auckland (or New Zealand)

3. **Verification:**
   - Google will mail a postcard with code (takes 5-14 days)
   - Or verify by phone/email if available

4. **Complete Profile:**
   - Add business hours
   - Upload photos (logo, office, team)
   - Add services you offer
   - Write business description

5. **Get Reviews:**
   - Share your Google Business link with clients
   - Respond to all reviews (good and bad)

---

## 5 Schema Markup for Reviews (When You Get Them)

When you have customer testimonials/reviews, add schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kounga Solutions",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "15"
  }
}
</script>
```

Add this to `<head>` after your existing JSON-LD schema.

---

## 6 Social Media Setup

### Create Profiles (If Not Already Done):

1. **Facebook Business Page**
   - https://www.facebook.com/pages/create
   - Post updates, engage with clients

2. **LinkedIn Company Page**
   - https://www.linkedin.com/company/setup
   - Great for B2B networking in NZ

3. **Twitter/X**
   - @KoungaSolutions (mentioned in your meta tags)
   - Share tech tips, updates

4. **Instagram** (Optional)
   - Visual content about projects
   - Behind-the-scenes

---

## 7 Additional Tools (Optional)

### Microsoft Clarity (FREE - Recommended)
- See how users interact with your site
- Heatmaps and session recordings
- https://clarity.microsoft.com

### SEMrush / Ahrefs (Paid)
- Keyword research
- Competitor analysis
- Backlink tracking

### PageSpeed Insights
- https://pagespeed.web.dev
- Test: `https://www.koungasolutions.co.nz`
- Aim for 90+ score

---

##  Timeline & Priorities

### Week 1 (Launch Week):
-  Google Search Console - **DO NOW**
-  Google Analytics - **DO NOW**
-  Bing Webmaster - Quick if imported from GSC

### Week 2:
-  Google Business Profile - Submit for verification
-  Create/optimize social media profiles

### Week 3-4:
-  Start collecting customer reviews
-  Add review schema markup
-  Monitor analytics and search console

### Ongoing:
- Post on social media weekly
- Monitor analytics monthly
- Update content quarterly

---

##  Quick Start Commands

### Add Google Search Console Verification:
```bash
# After getting verification file from Google
git add googleXXXXXXXXXX.html
git commit -m "Add Google Search Console verification"
git push origin main
```

### Add Google Analytics:
```bash
# After editing index.html with GA4 code
git add index.html
git commit -m "Add Google Analytics 4 tracking"
git push origin main
```

---

##  Expected Results

### Month 1:
- Site indexed by Google
- 10-50 visitors/month
- Appear for branded searches ("Kounga Solutions")

### Month 3:
- 100-300 visitors/month
- Ranking for some local keywords
- Google Business Profile verified

### Month 6:
- 300-1000 visitors/month
- Ranking on page 1 for targeted keywords
- Getting organic leads

**Note:** Results vary based on competition, content quality, and ongoing SEO efforts.

---

##  Need Help?

- **Google Search Console Help:** https://support.google.com/webmasters
- **Google Analytics Help:** https://support.google.com/analytics
- **Local SEO Guide:** https://moz.com/learn/seo/local

---

**Last Updated:** 31 March 2026
**Domain:** www.koungasolutions.co.nz
**Status:** Live and ready for SEO setup! 

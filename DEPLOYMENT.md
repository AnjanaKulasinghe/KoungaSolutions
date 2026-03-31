# 🚀 GitHub Pages Deployment Checklist

## ✅ Pre-Deployment Checklist

- [x] CNAME file created with domain: koungasolutions.co.nz
- [x] .nojekyll file created (prevents Jekyll processing)
- [x] .gitignore file configured
- [x] All assets in correct folders
- [x] Meta tags configured for SEO
- [x] Sitemap.xml configured
- [x] robots.txt configured
- [x] All images optimized
- [x] Links point to correct domain

## 📋 Deployment Steps

### 1. Push to GitHub

```bash
# Initialize repository (if not done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Production ready - Initial deployment"

# Set main branch
git branch -M main

# Add remote origin (replace with your repo URL)
git remote add origin https://github.com/anjanakulasinghe/koungasolutions-website.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to: https://github.com/anjanakulasinghe/koungasolutions-website/settings/pages
2. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**

### 3. Configure Custom Domain

#### In GitHub:
1. Still in GitHub Pages settings
2. Under "Custom domain": enter `koungasolutions.co.nz`
3. Click **Save**

#### In Domain Registrar (DNS Settings):

**A Records (for koungasolutions.co.nz):**
```
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

**CNAME Record (for www.koungasolutions.co.nz):**
```
Type: CNAME    Name: www    Value: anjanakulasinghe.github.io
```

### 4. Enable HTTPS

1. Wait 5-10 minutes after DNS configuration
2. In GitHub Pages settings, check **"Enforce HTTPS"**
3. Done! ✨

## 🔍 Verification

- [ ] Site loads at https://koungasolutions.co.nz
- [ ] www.koungasolutions.co.nz redirects correctly
- [ ] HTTPS is working (green padlock)
- [ ] All images load correctly
- [ ] Navigation links work
- [ ] Contact form is functional
- [ ] SEO meta tags present (check view-source)
- [ ] Mobile responsive (test on phone)
- [ ] Performance good (use PageSpeed Insights)

## 📝 Post-Deployment

### Submit to Search Engines

1. **Google Search Console**
   - Add property: https://koungasolutions.co.nz
   - Submit sitemap: https://koungasolutions.co.nz/sitemap.xml

2. **Bing Webmaster Tools**
   - Add site
   - Submit sitemap

### Monitor

- Check Google Search Console for indexing status
- Monitor site health and errors
- Check Core Web Vitals

## 🆘 Troubleshooting

### Site not loading?
- Check if GitHub Pages is enabled in repo settings
- Verify CNAME file contains only: `koungasolutions.co.nz`
- DNS can take 24-48 hours to propagate

### Images not showing?
- Check file paths are correct (case-sensitive)
- Verify images exist in assets/images/
- Check browser console for 404 errors

### Custom domain not working?
- Verify DNS records in domain registrar
- Check DNS propagation: https://www.whatsmydns.net/
- Ensure CNAME file is in repository root

### HTTPS not available?
- Wait 10-15 minutes after DNS verification
- Try disabling and re-enabling in GitHub settings
- Ensure DNS records are correct

## 📞 Support

For issues:
- GitHub Pages Documentation: https://docs.github.com/pages
- DNS Help: Contact your domain registrar
- Site Issues: Check browser console for errors

---

**Production URL:** https://koungasolutions.co.nz
**Repository:** https://github.com/anjanakulasinghe/koungasolutions-website
**Deployed:** 31 March 2026

# Kounga Solutions - Modern Static Website

A high-performance, modern static website for Kounga Solutions built with HTML5, Tailwind CSS, and vanilla JavaScript.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Performance Optimized**: Fast loading times with lazy loading and optimized assets
- **SEO Friendly**: Semantic HTML5 and meta tags for better search engine visibility
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels
- **GitHub Pages Ready**: Can be deployed to GitHub Pages with zero configuration

## 📁 Project Structure

```
new-site/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   ├── images/         # Optimized images
│   └── videos/         # Video files
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No dependencies, pure JS
- **Font Awesome**: Icon library
- **Google Fonts**: Inter & Poppins fonts

## 📦 Setup Instructions

### Local Development

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd new-site
   ```

2. **Open with a local server** (choose one):
   
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   
   - Using Node.js http-server:
     ```bash
     npx http-server
     ```
   
   - Using VS Code Live Server extension:
     - Install "Live Server" extension
     - Right-click on `index.html` and select "Open with Live Server"

3. **Visit** `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch and "/new-site" folder (or root if you moved files)
   - Click "Save"
   - Your site will be live at: `https://your-username.github.io/your-repo/`

## 🎨 Customization Guide

### Colors

Edit the Tailwind config in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#f8d194',    // Change this
                secondary: '#f6b782',  // Change this
                accent: '#ff6b6b',     // Change this
                dark: '#111111',       // Change this
            }
        }
    }
}
```

### Content

- **Services**: Edit the services section in `index.html` (search for `id="services"`)
- **Team Members**: Update team section (search for `id="team"`)
- **Testimonials**: Modify testimonials section (search for `id="testimonials"`)
- **Contact Info**: Update footer section (search for `id="contact"`)

### Images

- Replace images in the `../wp-content/uploads/` directory with your own
- Update image paths in `index.html`
- Optimize images before uploading (see Performance Optimization below)

## ⚡ Performance Optimization

### Image Optimization

1. **Compress images**:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 200KB for photos, < 50KB for logos/icons

2. **Modern formats**:
   - Convert to WebP for better compression
   - Provide fallbacks for older browsers

3. **Lazy loading**:
   - Already implemented in the code
   - Add `loading="lazy"` to images below the fold

### Video Optimization

1. **Compress videos**:
   - Use HandBrake or FFmpeg
   - Target: H.264 codec, 720p or 1080p max
   - Aim for < 5MB for hero videos

2. **Consider alternatives**:
   - Use animated images (GIF/WebP) for shorter clips
   - Host videos on YouTube/Vimeo and embed

### Code Optimization

For production deployment:

1. **Minify CSS/JS**:
   ```bash
   # Using online tools or:
   npm install -g clean-css-cli uglify-js
   cleancss -o css/style.min.css css/style.css
   uglifyjs js/main.js -o js/main.min.js
   ```

2. **Update references** in `index.html` to use minified versions

## 🔍 SEO Optimization

- [x] Semantic HTML5 tags
- [x] Meta descriptions
- [x] Open Graph tags (social media)
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console

### Adding Google Analytics

1. Get your tracking ID from Google Analytics
2. Add before `</head>` in `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome for Android (last 2 versions)

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation supported
- Screen reader friendly
- Focus indicators on interactive elements
- Reduced motion support

## 📱 Mobile Optimization

- Touch-friendly interface (minimum 44x44px touch targets)
- Mobile-first responsive design
- Optimized images for mobile devices
- Fast loading on 3G/4G networks

## 🐛 Troubleshooting

### Video not playing
- Ensure video files are in the correct path
- Check browser console for errors
- Try converting video to different format (MP4 H.264)
- Add `playsinline` attribute for iOS

### Animations not working
- Check browser support for Intersection Observer
- Ensure JavaScript is enabled
- Clear browser cache

### Images not loading
- Verify image paths are correct
- Check file names (case-sensitive on Linux/GitHub Pages)
- Ensure images are in the correct directory

## 📈 Future Enhancements

- [ ] Add contact form with backend integration
- [ ] Implement blog section
- [ ] Add case studies/portfolio
- [ ] Set up PWA (Progressive Web App)
- [ ] Add multi-language support
- [ ] Implement dark mode toggle
- [ ] Add loading animations
- [ ] Create interactive demos

## 📝 License

© 2024 Kounga Solutions. All rights reserved.

## 🤝 Support

For questions or support:
- Email: info@koungasolutions.co.nz
- Phone: (+64) 022 187 3021
- Website: https://koungasolutions.co.nz

---

**Built with ❤️ by Kounga Solutions**

# Gangotri Khadi - Deployment Guide

Complete step-by-step instructions for deploying your Gangotri Khadi website to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Updated all contact information (email, phone, WhatsApp)
- [ ] Updated donation details (UPI ID, bank account)
- [ ] Replaced placeholder images with your own
- [ ] Tested all links and forms locally
- [ ] Verified mobile responsiveness
- [ ] Updated product information and prices
- [ ] Checked all text for typos and accuracy

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free & Easy)

**Best for**: Beginners, no cost, automatic updates

**Steps**:

1. **Create GitHub Account**
   - Go to [github.com](https://github.com)
   - Sign up for a free account

2. **Create New Repository**
   - Click "+" → "New repository"
   - Name it: `gangotri-khadi` (or any name)
   - Add description: "Gangotri Khadi - Handmade Clothing Supporting Rural Artisans"
   - Choose "Public"
   - Click "Create repository"

3. **Upload Files**
   - Click "Add file" → "Upload files"
   - Drag and drop all files from the export folder
   - Commit changes with message: "Initial commit"

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Select "main" branch
   - Click Save
   - Your site is now live at: `https://yourusername.github.io/gangotri-khadi`

5. **Custom Domain (Optional)**
   - In Settings → Pages
   - Add your custom domain
   - Update DNS records with your domain provider

---

### Option 2: Netlify (Free & Powerful)

**Best for**: Easy deployment, automatic HTTPS, custom domain

**Steps**:

1. **Sign Up**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or email

2. **Deploy**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the entire project folder
   - Netlify automatically builds and deploys

3. **Access Your Site**
   - Your site is live at a Netlify URL
   - Example: `https://gangotri-khadi.netlify.app`

4. **Custom Domain**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS setup instructions

5. **Continuous Updates**
   - Connect GitHub repository for automatic deployments
   - Any push to main branch auto-deploys

---

### Option 3: Vercel (Free & Fast)

**Best for**: Performance, edge caching, serverless

**Steps**:

1. **Sign Up**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub or email

2. **Import Project**
   - Click "New Project"
   - Upload files or connect GitHub
   - Configure settings (usually defaults are fine)

3. **Deploy**
   - Click "Deploy"
   - Your site is live instantly

4. **Access Your Site**
   - Example: `https://gangotri-khadi.vercel.app`

5. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain
   - Update DNS records

---

### Option 4: Traditional Web Hosting (Bluehost, GoDaddy, etc.)

**Best for**: Full control, custom configurations

**Steps**:

1. **Choose Hosting Provider**
   - Popular options: Bluehost, GoDaddy, HostGator, SiteGround
   - Select a plan (shared hosting is sufficient)

2. **Upload Files via FTP**
   - Download FTP client (FileZilla, WinSCP)
   - Get FTP credentials from hosting provider
   - Connect to your server
   - Upload all files to `public_html` or `www` folder

3. **Ensure index.html is in Root**
   - Verify `index.html` is directly in the root directory
   - Not in a subfolder

4. **Access Your Site**
   - Your site is live at your domain name
   - Example: `https://gangotri-khadi.com`

---

### Option 5: AWS S3 + CloudFront (Professional)

**Best for**: Scalability, global distribution

**Steps**:

1. **Create AWS Account**
   - Go to [aws.amazon.com](https://aws.amazon.com)
   - Sign up for free tier

2. **Create S3 Bucket**
   - Go to S3 service
   - Create new bucket with your domain name
   - Enable "Static website hosting"
   - Upload all files

3. **Set Bucket Policy**
   - Allow public read access
   - Configure for website hosting

4. **Create CloudFront Distribution**
   - Point to your S3 bucket
   - Enable HTTPS
   - Set default root object to `index.html`

5. **Access Your Site**
   - CloudFront provides a URL
   - Add custom domain via Route 53

---

## 🔧 Post-Deployment Setup

### 1. Set Up Contact Form Backend

The contact form currently shows an alert. For production, set up a backend:

**Option A: Formspree (Free)**
1. Go to [formspree.io](https://formspree.io)
2. Create account and form
3. Update form action in `js/script.js`

**Option B: Firebase (Free)**
1. Create Firebase project
2. Enable Firestore database
3. Add Firebase SDK to `index.html`
4. Update form submission code

**Option C: Your Own Backend**
1. Create backend API endpoint
2. Update form submission to POST to your endpoint
3. Store submissions in database

### 2. Set Up Analytics

**Google Analytics**:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Add this to `index.html` before `</head>`.

### 3. Set Up Email Notifications

For donation and contact form submissions:

**Using SendGrid**:
1. Create SendGrid account
2. Get API key
3. Create backend endpoint to send emails
4. Update form handlers

### 4. Enable HTTPS

Most platforms (GitHub Pages, Netlify, Vercel) provide free HTTPS automatically.

For traditional hosting:
- Use Let's Encrypt (free SSL certificate)
- Or purchase SSL from hosting provider

### 5. Set Up Email Forwarding

For email addresses like `info@gangotri-khadi.org`:
- Use email forwarding service
- Forward to your personal email
- Or set up email hosting (Gmail for Business, Zoho)

---

## 📊 Performance Optimization

### Optimize Images

1. **Compress Images**
   - Use TinyPNG, ImageOptim, or similar
   - Reduce file size without losing quality

2. **Use Modern Formats**
   - Convert to WebP for better compression
   - Keep PNG/JPG as fallback

3. **Lazy Load Images**
   - Add `loading="lazy"` to img tags
   - Improves page load speed

### Minify CSS & JavaScript

1. **Minify CSS**
   ```bash
   # Using online tool or CLI
   cssnano style.css > style.min.css
   ```

2. **Minify JavaScript**
   ```bash
   # Using online tool or CLI
   terser script.js > script.min.js
   ```

3. **Update HTML**
   - Link to minified versions
   - Reduces file sizes significantly

### Enable Caching

Most platforms handle caching automatically. For traditional hosting:
- Set cache headers in `.htaccess`
- Enable gzip compression
- Use CDN for static assets

---

## 🔐 Security Best Practices

### 1. HTTPS

- Always use HTTPS (not HTTP)
- Redirect HTTP to HTTPS
- Update all image URLs to use HTTPS

### 2. Content Security Policy

Add to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;">
```

### 3. Protect Sensitive Information

- Never commit API keys or passwords
- Use environment variables for secrets
- Validate all form inputs on backend

### 4. Regular Updates

- Keep dependencies updated
- Monitor security advisories
- Test site regularly

---

## 🐛 Troubleshooting Deployment

### Site Shows 404 Error

**Solution**:
- Ensure `index.html` is in root directory
- Check file structure matches expected layout
- Verify all file paths are correct

### Styles/Scripts Not Loading

**Solution**:
- Check file paths in `index.html`
- Verify CSS is in `css/` folder
- Verify JS is in `js/` folder
- Check browser console for 404 errors

### Images Not Displaying

**Solution**:
- Use absolute URLs (with http/https)
- Verify image URLs are accessible
- Check image file formats
- Ensure CORS headers are set (if needed)

### Contact Form Not Working

**Solution**:
- Verify form backend is configured
- Check browser console for errors
- Test form locally first
- Ensure email service is active

### Site Slow to Load

**Solution**:
- Optimize and compress images
- Minify CSS and JavaScript
- Enable caching
- Use CDN for static assets
- Check hosting server performance

---

## 📈 Monitoring & Maintenance

### Set Up Monitoring

1. **Uptime Monitoring**
   - Use UptimeRobot (free)
   - Get alerts if site goes down

2. **Performance Monitoring**
   - Use Google PageSpeed Insights
   - Monitor Core Web Vitals
   - Aim for 90+ scores

3. **Analytics**
   - Track visitor numbers
   - Monitor traffic sources
   - Analyze user behavior

### Regular Maintenance

- [ ] Check for broken links monthly
- [ ] Update content regularly
- [ ] Review analytics weekly
- [ ] Test forms monthly
- [ ] Update contact information as needed
- [ ] Monitor security alerts
- [ ] Backup site files regularly

---

## 🎯 Next Steps

1. **Choose deployment platform** (GitHub Pages recommended for beginners)
2. **Follow deployment steps** for your chosen platform
3. **Test site thoroughly** after deployment
4. **Set up analytics** to track visitors
5. **Configure contact form** for production
6. **Monitor performance** and user feedback
7. **Plan content updates** for ongoing engagement

---

## 📞 Support

If you encounter issues:

1. Check the Troubleshooting section above
2. Review platform-specific documentation
3. Contact your hosting provider support
4. Check browser console for error messages

---

**Happy Deploying! 🚀**

Your Gangotri Khadi website is ready to make an impact!

# Gangotri Khadi - Handmade Clothing Supporting Rural Artisans

A complete, modern, professional website for Gangotri Khadi—a social initiative dedicated to promoting handmade khadi clothing and supporting rural artisans in India.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Deployment](#deployment)
- [Customization](#customization)
- [SEO Optimization](#seo-optimization)
- [Contact Information](#contact-information)

## ✨ Features

### Pages Included

1. **Home Page** - Hero banner, introduction, why khadi matters, featured products
2. **About Page** - Organization story, vision, mission, artisan empowerment
3. **Products Page** - Product catalog with WhatsApp ordering integration
4. **Mission Page** - Goals, impact metrics, and ways to support
5. **Donation Page** - UPI and bank transfer options, donation tiers
6. **Contact Page** - Contact form, FAQ, social media links

### Design Features

- **Nature-Inspired Color Palette**: Sage green, warm taupe, terracotta, cream
- **Responsive Design**: Fully mobile-friendly with adaptive layouts
- **Modern Typography**: Playfair Display (headings), Lato (body), Caveat (accents)
- **SEO Optimized**: Meta tags, semantic HTML, proper heading hierarchy
- **Accessibility**: Proper contrast ratios, keyboard navigation
- **Interactive Navigation**: Mobile menu toggle, smooth page transitions

## 📁 Project Structure

```
gangotri-khadi-export/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Complete CSS stylesheet
├── js/
│   └── script.js          # JavaScript for routing and interactivity
├── images/                # Image assets folder
├── README.md              # This file
└── DEPLOYMENT.md          # Deployment instructions
```

## 🚀 Quick Start

### Option 1: Local Development (Simple HTTP Server)

1. **Extract the ZIP file** to your desired location
2. **Open a terminal** in the project directory
3. **Start a simple HTTP server**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if installed)
   npx http-server
   ```
4. **Open your browser** and navigate to `http://localhost:8000`

### Option 2: Direct File Opening

Simply open `index.html` in your web browser. The website will work without a server, though some features may be limited.

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Create a GitHub repository** named `gangotri-khadi`
2. **Upload all files** to the repository
3. **Enable GitHub Pages** in repository settings (Settings → Pages → Main branch)
4. **Access your site** at `https://yourusername.github.io/gangotri-khadi`

### Deploy to Netlify

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag and drop** the entire project folder into Netlify
3. **Your site is live** instantly with a Netlify URL
4. **Connect custom domain** in Netlify settings

### Deploy to Vercel

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import your project** from GitHub or upload files
3. **Deploy** with one click
4. **Access your site** at the provided Vercel URL

### Deploy to Traditional Web Hosting

1. **Upload all files** via FTP to your hosting server
2. **Ensure `index.html` is in the root directory**
3. **Access your site** via your domain name

## ⚙️ Customization

### Update Contact Information

Edit `js/script.js` and find the contact section:

```javascript
// Update phone number for WhatsApp
whatsapp: '919876543210'  // Replace with your number

// Update email
email: 'info@gangotri-khadi.org'  // Replace with your email

// Update phone
phone: '+91 98765 43210'  // Replace with your number
```

### Update Donation Details

In `js/script.js`, find the donation section and update:

```javascript
// UPI ID
UPI ID: gangotri.khadi@upi

// Bank Details
Account Number: 1234567890123456
IFSC Code: SBIN0001234
Bank Name: State Bank of India
```

### Update Product Information

In `js/script.js`, modify the `renderProductCard` function to update:
- Product names
- Descriptions
- Prices
- Images

### Update Images

Replace image URLs in `js/script.js` with your own hosted images:

```javascript
// Hero image
style="background-image: url('YOUR_IMAGE_URL')"

// Product images
<img src="YOUR_PRODUCT_IMAGE_URL" alt="Product Name">
```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Sage Green | #3d6548 | Primary brand color |
| Warm Taupe | #A89968 | Secondary accents |
| Terracotta | #C85A3A | Call-to-action buttons |
| Cream | #F8F6F3 | Light backgrounds |
| Dark Charcoal | #2C2C2C | Body text |

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Lato (sans-serif)
- **Accents**: Caveat (handwritten)

## 🔍 SEO Optimization

### Meta Tags

The website includes optimized meta tags for:
- Page titles
- Meta descriptions
- Open Graph tags
- Keywords targeting

### Keywords Included

- Gangotri Khadi
- Handmade khadi clothing
- Sustainable fashion India
- Rural artisan support
- Traditional Indian handloom

### Best Practices

- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Alt text for all images
- Internal linking between pages
- Mobile-friendly responsive design

## 📱 Mobile Responsiveness

The website is fully responsive across all devices:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above

All pages adapt seamlessly to different screen sizes.

## 🔐 Security Considerations

- No sensitive data is stored locally
- Contact form submissions should be handled by a backend service
- WhatsApp links are safe and direct users to WhatsApp
- All external links open in new tabs

## 📊 Analytics Setup

To add Google Analytics:

1. **Get your tracking ID** from Google Analytics
2. **Add the tracking code** to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR_TRACKING_ID');
   </script>
   ```

## 🎯 WhatsApp Integration

The website includes WhatsApp order buttons. Update the phone number:

1. Find `https://wa.me/919876543210` in `js/script.js`
2. Replace `919876543210` with your WhatsApp number (country code + number, no spaces)
3. The message will be pre-filled when users click the button

## 🆘 Troubleshooting

### Page Not Loading

- Ensure all files are in the correct folder structure
- Check that `index.html`, `css/style.css`, and `js/script.js` are present
- Clear browser cache and reload

### Styles Not Applying

- Verify `css/style.css` is in the `css/` folder
- Check browser console for 404 errors
- Ensure correct file paths in `index.html`

### JavaScript Not Working

- Verify `js/script.js` is in the `js/` folder
- Check browser console for errors
- Ensure JavaScript is enabled in your browser

### Images Not Showing

- Verify image URLs are correct and accessible
- Use absolute URLs (starting with `http://` or `https://`)
- Check image file formats (JPG, PNG, WebP supported)

## 📞 Contact Information

- **Email**: info@gangotri-khadi.org
- **Phone**: +91 98765 43210
- **WhatsApp**: +91 98765 43210

## 📄 License

This website is created for Gangotri Khadi. All content and design are proprietary.

## 🤝 Support

For questions or issues with the website, please contact the development team or use the contact form on the website.

---

**Built with ❤️ for Gangotri Khadi - Supporting Rural Artisans & Sustainable Fashion**

**Last Updated**: March 2024
**Version**: 1.0.0

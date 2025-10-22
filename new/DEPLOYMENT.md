# 🚀 Universal Telecom - Complete Deployment Guide

## 📋 Table of Contents

1. [Overview](#overview)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Deployment Options](#deployment-options)
4. [Shared Hosting Deployment](#shared-hosting-deployment)
5. [VPS/Dedicated Server Deployment](#vpsdedicated-server-deployment)
6. [Cloud Platform Deployment](#cloud-platform-deployment)
7. [Post-Deployment Configuration](#post-deployment-configuration)
8. [SSL/HTTPS Setup](#sslhttps-setup)
9. [Domain Configuration](#domain-configuration)
10. [Troubleshooting](#troubleshooting)
11. [Maintenance & Monitoring](#maintenance--monitoring)

---

## 🎯 Overview

This guide provides step-by-step instructions for deploying the Universal Telecom website to production. The site is a **static HTML/CSS/JavaScript** website with no server-side dependencies, making it compatible with virtually any hosting environment.

### Key Features:
- ✅ **100% Static** - No database or backend required
- ✅ **Multilingual** - Spanish, English, and French
- ✅ **SEO Optimized** - Sitemap, robots.txt, meta tags
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **Forms Ready** - Email integration via formspree.io
- ✅ **Analytics Ready** - Google Analytics integration
- ✅ **Fast Loading** - Optimized assets and code

---

## ✅ Pre-Deployment Checklist

Before deploying, complete these tasks:

### 1. **Update Configuration**

Edit `js/main.js` and update:
\`\`\`javascript
// Line 1-3: Update with your actual Google Analytics ID
const GA_MEASUREMENT_ID = 'G-YOUR-ACTUAL-ID'; // Replace this!
\`\`\`

### 2. **Configure Contact Forms**

Update all contact form actions in:
- `es/contacto.html` (line ~250)
- `en/contact.html` (line ~250)
- `fr/contact.html` (line ~250)

Change:
\`\`\`html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
\`\`\`

To use your actual Formspree form ID or your own backend endpoint.

### 3. **Update Domain References**

Search and replace `universaltelecom.com` with your actual domain in:
- `sitemap.xml` (all URLs)
- `robots.txt` (Sitemap URL)
- Social media meta tags in all HTML files

### 4. **Test Locally**

\`\`\`bash
# Option 1: Use Python's built-in server
python3 -m http.server 8000

# Option 2: Use Node.js http-server
npx http-server -p 8000

# Then open: http://localhost:8000/new/
\`\`\`

### 5. **Validate HTML/CSS**

- Run HTML validation: https://validator.w3.org/
- Check broken links
- Test all forms
- Verify all images load
- Test language switching

---

## 🏢 Deployment Options

### Option 1: Shared Hosting (Easiest)
**Best for:** Small to medium traffic sites
**Cost:** $3-10/month
**Examples:** Hostinger, SiteGround, Bluehost, GoDaddy

### Option 2: VPS/Dedicated Server
**Best for:** High traffic, full control needed
**Cost:** $5-50/month
**Examples:** DigitalOcean, Linode, Vultr, AWS Lightsail

### Option 3: Cloud Platforms (Modern)
**Best for:** Scalability, global reach
**Cost:** Free tier available, pay-as-you-go
**Examples:** Vercel, Netlify, Cloudflare Pages, GitHub Pages

---

## 🌐 Shared Hosting Deployment

### Step 1: Choose a Hosting Provider

Recommended providers:
1. **Hostinger** - $2.99/month, excellent performance
2. **SiteGround** - $3.99/month, great support
3. **Bluehost** - $3.95/month, beginner-friendly

### Step 2: Purchase Hosting & Domain

1. Go to your chosen provider's website
2. Select a hosting plan (Basic/Starter is sufficient)
3. Choose your domain name (e.g., universaltelecom.com)
4. Complete purchase and wait for account setup email

### Step 3: Access File Manager

**Via cPanel:**
1. Login to cPanel (usually: yourdomain.com/cpanel)
2. Find "File Manager" icon
3. Navigate to `public_html` folder
4. Delete default files (index.html, cgi-bin, etc.)

**Via FTP:**
1. Get FTP credentials from hosting provider
2. Download FileZilla: https://filezilla-project.org/
3. Connect using your FTP credentials
4. Navigate to `public_html` folder

### Step 4: Upload Website Files

**Via File Manager:**
1. Click "Upload" button
2. Select all files from the `new/` folder
3. Upload and wait for completion
4. Verify all files are in `public_html`

**Via FTP:**
1. Select all files in local `new/` folder
2. Drag and drop to remote `public_html` folder
3. Wait for transfer to complete

### Step 5: Set Correct File Structure

Your `public_html` should look like:
\`\`\`
public_html/
├── index.html (main redirect page)
├── es/
│   ├── index.html
│   ├── centralita-virtual.html
│   └── ... (all Spanish pages)
├── en/
│   ├── index.html
│   ├── virtual-pbx.html
│   └── ... (all English pages)
├── fr/
│   ├── index.html
│   ├── standard-virtuel.html
│   └── ... (all French pages)
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/ (if applicable)
├── sitemap.xml
└── robots.txt
\`\`\`

### Step 6: Configure .htaccess

Create/edit `.htaccess` file in `public_html`:
```apache
# See HTACCESS.md for complete configuration

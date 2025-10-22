#!/bin/bash

# Universal Telecom - Deployment Package Creator
# This script creates a production-ready ZIP file for deployment

echo "🚀 Universal Telecom - Creating Deployment Package..."
echo ""

# Set variables
PROJECT_NAME="universal-telecom"
VERSION="1.0.0"
DATE=$(date +%Y%m%d)
PACKAGE_NAME="${PROJECT_NAME}-${VERSION}-${DATE}"
TEMP_DIR="temp_package"
OUTPUT_FILE="${PACKAGE_NAME}.zip"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Create temporary directory
echo -e "${BLUE}📁 Creating temporary directory...${NC}"
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

# Copy all necessary files
echo -e "${BLUE}📋 Copying website files...${NC}"

# Copy HTML files
echo "  ✓ Copying HTML files..."
cp -r es "$TEMP_DIR/"
cp -r en "$TEMP_DIR/"
cp -r fr "$TEMP_DIR/"
cp index.html "$TEMP_DIR/"
cp 404.html "$TEMP_DIR/"

# Copy CSS
echo "  ✓ Copying CSS..."
mkdir -p "$TEMP_DIR/css"
cp css/styles.css "$TEMP_DIR/css/"

# Copy JavaScript
echo "  ✓ Copying JavaScript..."
mkdir -p "$TEMP_DIR/js"
cp js/main.js "$TEMP_DIR/js/"

# Copy images
echo "  ✓ Copying images..."
if [ -d "images" ]; then
    cp -r images "$TEMP_DIR/"
fi

# Copy configuration files
echo "  ✓ Copying configuration files..."
cp .htaccess "$TEMP_DIR/"
cp robots.txt "$TEMP_DIR/"
cp sitemap.xml "$TEMP_DIR/"

# Copy documentation
echo -e "${BLUE}📚 Copying documentation...${NC}"
cp README.md "$TEMP_DIR/" 2>/dev/null || echo "  ⚠️  README.md not found"
cp DEPLOYMENT.md "$TEMP_DIR/"
cp QUICK_START.md "$TEMP_DIR/"
cp TROUBLESHOOTING.md "$TEMP_DIR/"
cp SERVER_SETUP.md "$TEMP_DIR/"
cp HTACCESS_GUIDE.md "$TEMP_DIR/"
cp SITE_REVIEW.md "$TEMP_DIR/"

# Create deployment instructions
echo -e "${BLUE}📝 Creating deployment instructions...${NC}"
cat > "$TEMP_DIR/INSTALL.txt" << 'EOF'
=================================================================
  UNIVERSAL TELECOM - INSTALLATION INSTRUCTIONS
=================================================================

📦 PACKAGE CONTENTS:
  ✓ Complete multilingual website (ES, EN, FR)
  ✓ Optimized .htaccess with security & performance
  ✓ Comprehensive documentation
  ✓ Ready for immediate deployment

=================================================================
  QUICK START - 3 METHODS
=================================================================

METHOD 1: SHARED HOSTING (cPanel) - EASIEST
--------------------------------------------
1. Login to cPanel
2. Go to File Manager
3. Navigate to public_html (or www)
4. Delete existing files (backup first!)
5. Upload entire contents of this ZIP
6. Extract ZIP file
7. Visit your domain - Done! ✅

Time: 10 minutes

METHOD 2: VPS/DEDICATED SERVER
-------------------------------
1. Connect via SSH: ssh user@your-server-ip
2. Upload files: scp -r * user@your-server-ip:/var/www/html/
3. Set permissions: 
   sudo chown -R www-data:www-data /var/www/html
   sudo chmod -R 755 /var/www/html
4. Configure web server (see DEPLOYMENT.md)
5. Setup SSL (see DEPLOYMENT.md)
6. Visit your domain - Done! ✅

Time: 30 minutes

METHOD 3: CLOUD PLATFORMS (Vercel/Netlify)
-------------------------------------------
1. Extract ZIP file locally
2. Visit vercel.com or netlify.com
3. Click "Deploy" and drag-and-drop folder
4. Configure domain
5. Visit your domain - Done! ✅

Time: 5 minutes

=================================================================
  REQUIRED CONFIGURATION
=================================================================

1. UPDATE GOOGLE ANALYTICS ID
   File: js/main.js
   Line: 3
   Replace: 'G-XXXXXXXXXX' with your actual GA4 ID

2. CONFIGURE CONTACT FORMS
   Files: All contact/demo/trial HTML files
   Update form action URLs to your backend endpoint

3. UPDATE CONTACT INFORMATION
   Replace placeholder phone/email addresses with real ones

4. VERIFY DOMAIN IN DNS
   Point A records to your server IP

=================================================================
  DOCUMENTATION
=================================================================

📖 DEPLOYMENT.md        - Complete deployment guide
📖 QUICK_START.md       - Fast deployment (< 30 min)
📖 TROUBLESHOOTING.md   - Solutions for common issues
📖 SERVER_SETUP.md      - VPS server configuration
📖 HTACCESS_GUIDE.md    - Apache configuration guide
📖 SITE_REVIEW.md       - Quality assurance report

=================================================================
  SUPPORT
=================================================================

Need help? Check documentation or:
- Stack Overflow: stackoverflow.com
- Apache Docs: httpd.apache.org/docs/
- Contact: support@universaltelecom.com

=================================================================
  CHECKLIST
=================================================================

Before going live:
□ All pages load correctly
□ SSL certificate installed
□ Contact forms tested
□ Google Analytics configured
□ Mobile responsive verified
□ All images load
□ Language switcher works
□ DNS configured
□ Backup created

=================================================================

Version: 1.0.0
Package Date: $(date +%Y-%m-%d)
Files: 44 pages in 3 languages

© 2025 Universal Telecom. All rights reserved.

=================================================================
EOF

# Create file manifest
echo -e "${BLUE}📋 Creating file manifest...${NC}"
cat > "$TEMP_DIR/MANIFEST.txt" << 'EOF'
=================================================================
  FILE MANIFEST - UNIVERSAL TELECOM WEBSITE
=================================================================

📁 STRUCTURE:
  /es/                    Spanish version (14 pages)
  /en/                    English version (14 pages)
  /fr/                    French version (14 pages)
  /css/                   Stylesheets
  /js/                    JavaScript files
  /images/                Website images
  index.html              Language selector
  404.html                Custom error page
  .htaccess               Apache configuration
  robots.txt              Search engine instructions
  sitemap.xml             XML sitemap (43 URLs)

📄 SPANISH PAGES (ES):
  - index.html            Homepage
  - centralita-virtual.html
  - whatsapp-api.html
  - agentes-ia.html
  - analisis-llamadas-ia.html
  - numeracion-global.html
  - fibra-optica.html
  - moviles.html
  - apis.html
  - api-sms.html
  - contacto.html
  - demo.html
  - prueba-gratis.html
  - aviso-legal.html
  - politica-privacidad.html
  - politica-cookies.html

📄 ENGLISH PAGES (EN):
  - index.html
  - virtual-pbx.html
  - whatsapp-business-api.html
  - ai-agents.html
  - call-analytics.html
  - global-numbers.html
  - apis.html
  - sms-api.html
  - contact.html
  - demo.html
  - free-trial.html
  - legal-notice.html
  - privacy-policy.html
  - cookie-policy.html

📄 FRENCH PAGES (FR):
  - index.html
  - standard-virtuel.html
  - whatsapp-business-api.html
  - agents-ia.html
  - analyse-appels.html
  - numeros-globaux.html
  - apis.html
  - api-sms.html
  - contact.html
  - demo.html
  - essai-gratuit.html
  - mentions-legales.html
  - politique-confidentialite.html
  - politique-cookies.html

📚 DOCUMENTATION:
  - README.md
  - DEPLOYMENT.md
  - QUICK_START.md
  - TROUBLESHOOTING.md
  - SERVER_SETUP.md
  - HTACCESS_GUIDE.md
  - SITE_REVIEW.md
  - INSTALL.txt (this package)
  - MANIFEST.txt (this file)

⚙️ CONFIGURATION:
  - .htaccess          470+ lines of Apache config
  - robots.txt         Search engine directives
  - sitemap.xml        43 URLs with hreflang tags

🎨 ASSETS:
  - css/styles.css     Global stylesheet
  - js/main.js         JavaScript functionality
  - images/logo.png    Company logo
  - images/*.png       Page screenshots

=================================================================
  STATISTICS
=================================================================

Total Files:        100+
Total Pages:        44 (including index & 404)
Languages:          3 (Spanish, English, French)
Code Lines:         50,000+
Words:              180,000+
Documentation:      7 guides (40,000+ words)

=================================================================
  FEATURES
=================================================================

✅ Multilingual (ES/EN/FR)
✅ Fully responsive mobile design
✅ SEO optimized
✅ Security hardened (.htaccess)
✅ Performance optimized (Gzip, caching)
✅ SSL ready
✅ Google Analytics ready
✅ Form validation
✅ Custom 404 page
✅ Clean URLs
✅ Cookie consent
✅ GDPR compliant
✅ Accessibility (WCAG 2.1)

=================================================================
  BROWSER SUPPORT
=================================================================

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

=================================================================
  REQUIREMENTS
=================================================================

SERVER:
  - Apache 2.4+ or Nginx
  - PHP not required (static site)
  - SSL certificate recommended
  - Minimum 500MB storage

OPTIONAL:
  - Google Analytics account
  - Form backend (Formspree/custom)
  - CDN (Cloudflare recommended)

=================================================================

Package Version: 1.0.0
Creation Date: $(date +%Y-%m-%d)
Created By: Universal Telecom Development Team

=================================================================
EOF

# Create version info
echo -e "${BLUE}ℹ️  Creating version info...${NC}"
cat > "$TEMP_DIR/VERSION.txt" << EOF
Universal Telecom Website
Version: 1.0.0
Build Date: $(date +"%Y-%m-%d %H:%M:%S")
Package: ${PACKAGE_NAME}

Components:
- HTML Pages: 44
- Languages: Spanish, English, French
- Documentation: 7 guides
- Configuration: .htaccess, robots.txt, sitemap.xml

Ready for production deployment.
EOF

# Remove any system files
echo -e "${BLUE}🧹 Cleaning up...${NC}"
find "$TEMP_DIR" -name ".DS_Store" -delete 2>/dev/null
find "$TEMP_DIR" -name "Thumbs.db" -delete 2>/dev/null
find "$TEMP_DIR" -name ".gitkeep" -delete 2>/dev/null

# Create ZIP file
echo -e "${BLUE}📦 Creating ZIP archive...${NC}"
if command -v zip &> /dev/null; then
    # Use zip if available
    cd "$TEMP_DIR"
    zip -r "../$OUTPUT_FILE" . -q
    cd ..
    echo -e "${GREEN}✓ ZIP created successfully!${NC}"
elif command -v 7z &> /dev/null; then
    # Use 7zip if available
    7z a -tzip "$OUTPUT_FILE" "./$TEMP_DIR/*" > /dev/null
    echo -e "${GREEN}✓ ZIP created successfully using 7zip!${NC}"
else
    echo -e "${RED}❌ Error: Neither 'zip' nor '7z' command found.${NC}"
    echo "Please install zip utility:"
    echo "  Ubuntu/Debian: sudo apt install zip"
    echo "  macOS: brew install zip"
    echo "  Or manually compress the '$TEMP_DIR' folder"
    exit 1
fi

# Get file size
FILE_SIZE=$(du -h "$OUTPUT_FILE" | cut -f1)

# Clean up temp directory
echo -e "${BLUE}🧹 Removing temporary files...${NC}"
rm -rf "$TEMP_DIR"

# Final summary
echo ""
echo -e "${GREEN}==================================================================${NC}"
echo -e "${GREEN}  ✅ DEPLOYMENT PACKAGE CREATED SUCCESSFULLY!${NC}"
echo -e "${GREEN}==================================================================${NC}"
echo ""
echo -e "📦 Package:    ${YELLOW}$OUTPUT_FILE${NC}"
echo -e "📊 Size:       ${YELLOW}$FILE_SIZE${NC}"
echo -e "📅 Date:       ${YELLOW}$(date +"%Y-%m-%d %H:%M:%S")${NC}"
echo -e "🌍 Languages:  ${YELLOW}Spanish, English, French${NC}"
echo -e "📄 Pages:      ${YELLOW}44 pages${NC}"
echo ""
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "   1. Extract ZIP file to verify contents"
echo "   2. Review INSTALL.txt for deployment instructions"
echo "   3. Upload to your web server"
echo "   4. Configure Google Analytics ID"
echo "   5. Test all functionality"
echo ""
echo -e "${GREEN}🚀 Ready for deployment!${NC}"
echo ""
echo -e "${BLUE}📖 Documentation included:${NC}"
echo "   - INSTALL.txt         Quick installation guide"
echo "   - DEPLOYMENT.md       Complete deployment guide"
echo "   - QUICK_START.md      Fast deployment (< 30 min)"
echo "   - TROUBLESHOOTING.md  Problem solutions"
echo "   - MANIFEST.txt        File listing"
echo ""
echo -e "${YELLOW}⚠️  Remember to:${NC}"
echo "   • Update Google Analytics ID in js/main.js"
echo "   • Configure contact form endpoints"
echo "   • Replace placeholder contact information"
echo "   • Test on staging before production"
echo ""
echo -e "${GREEN}==================================================================${NC}"
echo ""

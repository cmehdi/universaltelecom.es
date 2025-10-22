# Universal Telecom - Deployment Package Creator (PowerShell)
# For Windows users

Write-Host "🚀 Universal Telecom - Creating Deployment Package..." -ForegroundColor Cyan
Write-Host ""

# Set variables
$ProjectName = "universal-telecom"
$Version = "1.0.0"
$Date = Get-Date -Format "yyyyMMdd"
$PackageName = "$ProjectName-$Version-$Date"
$TempDir = "temp_package"
$OutputFile = "$PackageName.zip"

# Create temporary directory
Write-Host "📁 Creating temporary directory..." -ForegroundColor Blue
if (Test-Path $TempDir) {
    Remove-Item -Recurse -Force $TempDir
}
New-Item -ItemType Directory -Path $TempDir | Out-Null

# Copy all necessary files
Write-Host "📋 Copying website files..." -ForegroundColor Blue

# Copy HTML files
Write-Host "  ✓ Copying HTML files..." -ForegroundColor Green
Copy-Item -Recurse "es" "$TempDir\es"
Copy-Item -Recurse "en" "$TempDir\en"
Copy-Item -Recurse "fr" "$TempDir\fr"
Copy-Item "index.html" "$TempDir\"
Copy-Item "404.html" "$TempDir\"

# Copy CSS
Write-Host "  ✓ Copying CSS..." -ForegroundColor Green
New-Item -ItemType Directory -Path "$TempDir\css" -Force | Out-Null
Copy-Item "css\styles.css" "$TempDir\css\"

# Copy JavaScript
Write-Host "  ✓ Copying JavaScript..." -ForegroundColor Green
New-Item -ItemType Directory -Path "$TempDir\js" -Force | Out-Null
Copy-Item "js\main.js" "$TempDir\js\"

# Copy images if they exist
Write-Host "  ✓ Copying images..." -ForegroundColor Green
if (Test-Path "images") {
    Copy-Item -Recurse "images" "$TempDir\images"
}

# Copy configuration files
Write-Host "  ✓ Copying configuration files..." -ForegroundColor Green
Copy-Item ".htaccess" "$TempDir\"
Copy-Item "robots.txt" "$TempDir\"
Copy-Item "sitemap.xml" "$TempDir\"

# Copy documentation
Write-Host "📚 Copying documentation..." -ForegroundColor Blue
$docs = @(
    "README.md",
    "DEPLOYMENT.md",
    "QUICK_START.md",
    "TROUBLESHOOTING.md",
    "SERVER_SETUP.md",
    "HTACCESS_GUIDE.md",
    "SITE_REVIEW.md"
)

foreach ($doc in $docs) {
    if (Test-Path $doc) {
        Copy-Item $doc "$TempDir\"
        Write-Host "  ✓ Copied $doc" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  $doc not found" -ForegroundColor Yellow
    }
}

# Create installation instructions
Write-Host "📝 Creating installation instructions..." -ForegroundColor Blue
$installContent = @"
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
1. Connect via SSH
2. Upload files via SCP/FTP
3. Set permissions
4. Configure web server
5. Setup SSL
6. Visit your domain - Done! ✅

Time: 30 minutes

METHOD 3: CLOUD PLATFORMS (Vercel/Netlify)
-------------------------------------------
1. Extract ZIP file locally
2. Visit vercel.com or netlify.com
3. Deploy via drag-and-drop
4. Configure domain
5. Visit your domain - Done! ✅

Time: 5 minutes

=================================================================
  REQUIRED CONFIGURATION
=================================================================

1. UPDATE GOOGLE ANALYTICS ID
   File: js\main.js
   Replace: 'G-XXXXXXXXXX' with your GA4 ID

2. CONFIGURE CONTACT FORMS
   Update form action URLs

3. UPDATE CONTACT INFORMATION
   Replace placeholder phone/email

4. VERIFY DOMAIN DNS
   Point A records to server IP

=================================================================
  DOCUMENTATION
=================================================================

📖 DEPLOYMENT.md        - Complete deployment guide
📖 QUICK_START.md       - Fast deployment
📖 TROUBLESHOOTING.md   - Common issues
📖 SERVER_SETUP.md      - Server configuration
📖 HTACCESS_GUIDE.md    - Apache guide
📖 SITE_REVIEW.md       - QA report

=================================================================

Version: 1.0.0
Package Date: $(Get-Date -Format "yyyy-MM-dd")
Files: 44 pages in 3 languages

© 2025 Universal Telecom. All rights reserved.

=================================================================
"@

Set-Content -Path "$TempDir\INSTALL.txt" -Value $installContent

# Create file manifest
Write-Host "📋 Creating file manifest..." -ForegroundColor Blue
$manifestContent = @"
=================================================================
  FILE MANIFEST - UNIVERSAL TELECOM WEBSITE
=================================================================

Total Files:        100+
Total Pages:        44
Languages:          3 (Spanish, English, French)
Documentation:      7 comprehensive guides

Package Version: 1.0.0
Creation Date: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

=================================================================
"@

Set-Content -Path "$TempDir\MANIFEST.txt" -Value $manifestContent

# Create version info
Write-Host "ℹ️  Creating version info..." -ForegroundColor Blue
$versionContent = @"
Universal Telecom Website
Version: 1.0.0
Build Date: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
Package: $PackageName

Components:
- HTML Pages: 44
- Languages: Spanish, English, French
- Documentation: 7 guides

Ready for production deployment.
"@

Set-Content -Path "$TempDir\VERSION.txt" -Value $versionContent

# Clean up system files
Write-Host "🧹 Cleaning up..." -ForegroundColor Blue
Get-ChildItem -Path $TempDir -Include "Thumbs.db", ".DS_Store" -Recurse -Force | Remove-Item -Force

# Create ZIP file
Write-Host "📦 Creating ZIP archive..." -ForegroundColor Blue
try {
    Compress-Archive -Path "$TempDir\*" -DestinationPath $OutputFile -Force
    Write-Host "✓ ZIP created successfully!" -ForegroundColor Green
} catch {
    Write-Host "❌ Error creating ZIP: $_" -ForegroundColor Red
    exit 1
}

# Get file size
$FileSize = (Get-Item $OutputFile).Length / 1MB
$FileSizeFormatted = "{0:N2} MB" -f $FileSize

# Clean up temp directory
Write-Host "🧹 Removing temporary files..." -ForegroundColor Blue
Remove-Item -Recurse -Force $TempDir

# Final summary
Write-Host ""
Write-Host "==================================================================" -ForegroundColor Green
Write-Host "  ✅ DEPLOYMENT PACKAGE CREATED SUCCESSFULLY!" -ForegroundColor Green
Write-Host "==================================================================" -ForegroundColor Green
Write-Host ""
Write-Host "📦 Package:    $OutputFile" -ForegroundColor Yellow
Write-Host "📊 Size:       $FileSizeFormatted" -ForegroundColor Yellow
Write-Host "📅 Date:       $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" -ForegroundColor Yellow
Write-Host "🌍 Languages:  Spanish, English, French" -ForegroundColor Yellow
Write-Host "📄 Pages:      44 pages" -ForegroundColor Yellow
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Blue
Write-Host "   1. Extract ZIP file to verify contents"
Write-Host "   2. Review INSTALL.txt for deployment"
Write-Host "   3. Upload to your web server"
Write-Host "   4. Configure Google Analytics"
Write-Host "   5. Test all functionality"
Write-Host ""
Write-Host "🚀 Ready for deployment!" -ForegroundColor Green
Write-Host ""
Write-Host "⚠️  Remember to:" -ForegroundColor Yellow
Write-Host "   • Update Google Analytics ID"
Write-Host "   • Configure contact forms"
Write-Host "   • Replace placeholder info"
Write-Host "   • Test before production"
Write-Host ""
Write-Host "==================================================================" -ForegroundColor Green
Write-Host ""

# Open containing folder
Write-Host "📁 Opening folder..." -ForegroundColor Blue
explorer.exe (Get-Location)

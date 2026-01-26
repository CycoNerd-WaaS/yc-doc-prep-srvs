# DOCUMENT ASSISTANCE - Deployment Guide

This guide will help you deploy the Document Assistance website to GitHub Pages.

## 📁 Project Structure

```
document-assistance/
├── _config.yml              # Jekyll configuration (LDA toggle here!)
├── _layouts/
│   └── default.html         # Main page template
├── _includes/
│   ├── header.html          # Navigation & language toggle
│   └── footer.html          # Legal disclaimers & credentials
├── _data/
│   ├── en.yml               # English content
│   └── es.yml               # Spanish content
├── docs/                    # ← WEBSITE FILES (GitHub Pages serves from here)
│   ├── index.html           # Homepage
│   ├── about.html           # About page
│   ├── services.html        # Services page
│   ├── rates.html           # Pricing page
│   ├── contact.html         # Contact form
│   ├── faq.html             # FAQ page
│   ├── disclaimers.html     # Legal disclaimers
│   └── assets/
│       ├── css/main.css     # Stylesheet
│       ├── js/main.js       # JavaScript
│       └── images/
│           ├── logo/        # Logo files
│           └── patterns/    # Background patterns
├── Gemfile                  # Ruby dependencies
├── DEPLOY.md                # This file
└── README.md                # Project overview
```

## 🚀 Quick Start Deployment

### Step 1: Add Pattern Images

Copy the pattern files to `docs/assets/images/patterns/`:

```bash
# From the project folder containing the Firefly images:
cp "Firefly_Micromosaic_*.jpg" docs/assets/images/patterns/micro-mosaic.jpg
cp "Firefly_Mosaic_tessellation_*.jpg" docs/assets/images/patterns/mosaic-tessellation.jpg
cp "Firefly_Stuccowhite_*.png" docs/assets/images/patterns/stucco-microtile.png
cp "Firefly_Navy__Gold_Talavera_*195049.png" docs/assets/images/patterns/talavera-navy-gold.png
cp "Firefly_Cornercuts_*.jpg" docs/assets/images/patterns/scallop-trim.jpg
```

### Step 2: Add Logo Files

Copy logo files to `docs/assets/images/logo/`:
- logo-16.png
- logo-32.png
- logo-64.png
- logo-128.png
- logo-180.png
- logo-512.png
- logo.svg (if available)

### Step 3: Setup Formspree

1. Go to https://formspree.io and create a free account
2. Create a new form
3. Copy the form ID (looks like `abc123xyz`)
4. In `docs/contact.html`, find this line:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID

### Step 4: Deploy to GitHub Pages

```bash
# Initialize git repository
cd document-assistance
git init

# Add all files
git add .
git commit -m "Initial website build"

# Create repository on GitHub named 'document-assistance'
# Then push:
git remote add origin https://github.com/YOUR-USERNAME/document-assistance.git
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - **Branch:** `main`
   - **Folder:** `/docs`
4. Click **Save**
5. Wait 1-2 minutes for deployment
6. Your site will be live at: `https://YOUR-USERNAME.github.io/document-assistance`

---

## 🔧 Configuration

### Activate LDA Services (When Bond is Secured)

1. Open `_config.yml`
2. Find line 24:
   ```yaml
   enable_lda_services: false
   ```
3. Change to:
   ```yaml
   enable_lda_services: true
   ```
4. Add the LDA registration number:
   ```yaml
   lda:
     registration_number: "YOUR_LDA_NUMBER"
     expiration: "MM/DD/YYYY"
   ```
5. Commit and push:
   ```bash
   git add _config.yml
   git commit -m "Activate LDA services"
   git push
   ```
6. GitHub Pages will automatically rebuild

### Update Business Information

All business info is in `_config.yml` under the `business:` section:
- Address
- Phone numbers
- Email
- Hours
- Credentials (CTEC, Notary, LDA)

### Update Content

All text content is in the `_data/` folder:
- `en.yml` - English
- `es.yml` - Spanish

Edit these YAML files to change any text on the website.

---

## 🌐 Custom Domain (Optional)

To use a custom domain like `pomonadocs.com`:

### 1. Add CNAME File
Create file `docs/CNAME` with content:
```
www.pomonadocs.com
```

### 2. Configure DNS at Cloudflare

Add these DNS records:

| Type  | Name | Target                          |
|-------|------|----------------------------------|
| CNAME | www  | YOUR-USERNAME.github.io         |
| A     | @    | 185.199.108.153                 |
| A     | @    | 185.199.109.153                 |
| A     | @    | 185.199.110.153                 |
| A     | @    | 185.199.111.153                 |

### 3. Enable HTTPS in GitHub Pages

1. Settings → Pages
2. Check "Enforce HTTPS"

---

## 🧪 Local Testing (Optional)

To preview the site locally before deploying:

```bash
# Install Ruby (if not installed)
# macOS: brew install ruby
# Windows: Use RubyInstaller

# Install Jekyll
gem install bundler jekyll

# Navigate to project folder
cd document-assistance

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# View at: http://localhost:4000
```

---

## ✅ Checklist Before Going Live

- [ ] Pattern images added to `docs/assets/images/patterns/`
- [ ] Logo files added to `docs/assets/images/logo/`
- [ ] Formspree form ID configured in `contact.html`
- [ ] Business information correct in `_config.yml`
- [ ] Spanish translations reviewed by Yaneth
- [ ] LDA services set to `false` (until bond secured)
- [ ] Google Maps embed working (may need API key)
- [ ] Contact form tested
- [ ] All links working
- [ ] Mobile responsive checked

---

## 📞 Support

If you encounter issues:
1. Check GitHub Pages build status in repository Settings → Pages
2. Verify all file paths are correct (case-sensitive!)
3. Clear browser cache and try again
4. Check browser console for JavaScript errors

---

## 🔄 Making Updates

To update the website:

1. Edit files locally
2. Test if possible (`bundle exec jekyll serve`)
3. Commit and push:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. GitHub Pages auto-rebuilds in 1-2 minutes

---

**Last Updated:** January 2026
**Version:** 1.0

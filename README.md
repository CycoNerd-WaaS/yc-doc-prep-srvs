# Document Assistance Website

Professional website for **Document Assistance** — a tax preparation, notary public, and legal document assistance service located in Pomona, California.

![Status](https://img.shields.io/badge/status-production--ready-brightgreen)
![Jekyll](https://img.shields.io/badge/jekyll-4.3-red)
![License](https://img.shields.io/badge/license-private-lightgrey)

---

## 🏢 Business Information

**Document Assistance**  
401 S Main St, Suite 205  
Pomona, CA 91766-1638  

**Owner:** Yaneth Cisneros  
**Phone:** (909) 623-5276 | (909) 242-4343  
**Email:** documentassistant@msn.com  

### Credentials
| Credential | ID/Number | Expiration |
|------------|-----------|------------|
| City of Pomona Business License | #00145257 | June 30, 2026 |
| California Notary Public | #2458791 | August 11, 2027 |
| CTEC Registered Tax Preparer | #A130143 | October 31, 2026 |
| Legal Document Assistant | *Pending Bond* | — |

---

## ✨ Features

- **Bilingual Support** — Full English/Spanish toggle with instant switching
- **LDA Toggle System** — Legal Document Assistant services hidden until bond is secured
- **Mobile-First Design** — Responsive layout for all devices
- **Legal Compliance** — BPC § 6408.5 disclaimers throughout
- **SEO Optimized** — Schema.org structured data, meta tags, semantic HTML
- **Accessible** — WCAG-compliant, skip links, ARIA labels
- **Fast & Secure** — Static site, no database, GitHub Pages hosting

---

## 📁 Project Structure

```
document-assistance/
├── _config.yml                 # Site configuration & LDA toggle
├── _layouts/
│   └── default.html            # Master HTML template
├── _includes/
│   ├── header.html             # Navigation & language toggle
│   └── footer.html             # Disclaimers & credentials
├── _data/
│   ├── en.yml                  # English content
│   └── es.yml                  # Spanish content
├── docs/                       # ← GitHub Pages serves from here
│   ├── index.html              # Homepage
│   ├── about.html              # About Yaneth
│   ├── services.html           # Service descriptions
│   ├── rates.html              # Pricing tables
│   ├── contact.html            # Contact form (Formspree)
│   ├── faq.html                # FAQ accordion
│   ├── disclaimers.html        # Legal disclosures
│   └── assets/
│       ├── css/main.css        # Stylesheet (~1100 lines)
│       ├── js/main.js          # JavaScript functionality
│       └── images/
│           ├── logo/           # Logo files (add these)
│           └── patterns/       # Background textures
├── Gemfile                     # Ruby dependencies
├── DEPLOY.md                   # Deployment instructions
└── README.md                   # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Git installed
- GitHub account
- (Optional) Ruby & Jekyll for local testing

### Deploy to GitHub Pages

```bash
# 1. Clone or download this repository
git clone https://github.com/YOUR-USERNAME/document-assistance.git
cd document-assistance

# 2. Add your logo files to docs/assets/images/logo/

# 3. Configure Formspree ID in docs/contact.html

# 4. Push to GitHub
git add .
git commit -m "Initial deployment"
git push origin main

# 5. Enable GitHub Pages:
#    Settings → Pages → Source: main branch, /docs folder
```

Your site will be live at: `https://YOUR-USERNAME.github.io/document-assistance`

---

## ⚙️ Configuration

### Toggle LDA Services

The Legal Document Assistant services are **hidden by default** until the $25,000 bond is secured.

**To activate LDA services:**

1. Open `_config.yml`
2. Change line 24:
   ```yaml
   enable_lda_services: true
   ```
3. Add registration details:
   ```yaml
   lda:
     registration_number: "YOUR_NUMBER"
     county: "Los Angeles"
     expiration: "MM/DD/YYYY"
     bond_amount: "$25,000"
   ```
4. Commit and push — site rebuilds automatically

### Update Content

All text content lives in YAML data files:

| File | Purpose |
|------|---------|
| `_data/en.yml` | English content |
| `_data/es.yml` | Spanish content |
| `_config.yml` | Business info, credentials, settings |

Edit these files to change any text without touching HTML.

### Setup Contact Form

1. Create account at [Formspree.io](https://formspree.io)
2. Create new form
3. Copy form ID
4. In `docs/contact.html`, replace:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue | `#003366` | Primary — headers, text, trust |
| Teal | `#4F9D9D` | Secondary — accents, icons |
| Gold | `#DAA520` | Accent — CTAs, highlights |
| Slate | `#708090` | Neutral — body text |
| Light | `#F5F5F5` | Backgrounds |
| Dark | `#1a1a2e` | Footer |

### Typography

| Element | Font | Weight |
|---------|------|--------|
| Headings | Cormorant Garamond | 600-700 |
| Body | Source Sans 3 | 400-500 |
| Data/Prices | JetBrains Mono | 400 |

### Icons

Using [Phosphor Icons](https://phosphoricons.com/) (Duotone weight) via CDN.

---

## 📱 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, services preview, trust indicators |
| About | `/about` | Owner bio, credentials, location map |
| Services | `/services` | Detailed service descriptions |
| Rates | `/rates` | Pricing tables by category |
| FAQ | `/faq` | Accordion-style Q&A |
| Contact | `/contact` | Form, address, hours, map |
| Disclaimers | `/disclaimers` | Full legal disclosures |

---

## 🔒 Legal Compliance

This website includes all required California disclosures:

- **BPC § 6408.5** — "I am not an attorney" disclaimer on every page
- **BPC § 6408** — LDA registration number, county, expiration displayed
- **CTEC Disclosure** — Tax preparer ID with verification link
- **Notary Disclosure** — Commission number and expiration
- **No Immigration Services** — Explicit disclaimer

---

## 🌐 Custom Domain (Optional)

To use a domain like `pomonadocs.com`:

1. Create `docs/CNAME` containing:
   ```
   www.pomonadocs.com
   ```

2. Add DNS records at your registrar:
   ```
   CNAME  www  →  YOUR-USERNAME.github.io
   A      @    →  185.199.108.153
   A      @    →  185.199.109.153
   A      @    →  185.199.110.153
   A      @    →  185.199.111.153
   ```

3. Enable "Enforce HTTPS" in GitHub Pages settings

---

## 🧪 Local Development

```bash
# Install Jekyll (one-time)
gem install bundler jekyll

# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve

# View at http://localhost:4000
```

---

## 📋 Deployment Checklist

Before going live:

- [ ] Logo files added to `docs/assets/images/logo/`
- [ ] Pattern images in `docs/assets/images/patterns/`
- [ ] Formspree form ID configured
- [ ] Business info verified in `_config.yml`
- [ ] Spanish translations reviewed by Yaneth
- [ ] `enable_lda_services: false` (until bond secured)
- [ ] All links tested
- [ ] Mobile responsiveness checked
- [ ] Contact form tested
- [ ] Google Maps embed working

---

## 🔄 Maintenance

### Making Updates

```bash
# Edit files locally
# Then commit and push:
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages automatically rebuilds within 1-2 minutes.

### When LDA Bond is Secured

1. Update `_config.yml` with `enable_lda_services: true`
2. Add LDA registration number and expiration
3. Commit and push
4. Verify LDA services appear on website

---

## 📞 Support

**Website Developer Contact:**  
[Your contact information here]

**Useful Links:**
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Formspree Documentation](https://formspree.io/docs/)
- [CTEC Verification](https://ctec.org)

---

## 📄 License

This website is proprietary software developed for Document Assistance.  
All rights reserved. © 2026 Document Assistance.

---

*Last updated: January 2026*

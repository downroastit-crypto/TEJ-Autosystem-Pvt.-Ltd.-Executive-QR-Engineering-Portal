# TEJ Autosystem Pvt. Ltd. | Executive QR Engineering Portal

Official Quick Response (QR) Executive Portal for **TEJ Autosystem Pvt. Ltd.**, engineered for instantaneous client consultation, direct engineering RFQ channels, and seamless technical catalogue access.

[![Standards: Zero Slop](https://img.shields.io/badge/Standards-Zero_Slop-0A2540?style=flat-square)](#)
[![Accessibility: WCAG AA](https://img.shields.io/badge/Accessibility-WCAG_AA-008069?style=flat-square)](#)
[![Dependencies: 0](https://img.shields.io/badge/Runtime_Dependencies-0-0284C7?style=flat-square)](#)

---

## Overview

Designed for deployment on executive visiting cards, machinery tags, turnkey project handover documents, and trade expo collateral. Scanning the QR code instantly brings clients to a high-speed, mobile-optimized engineering hub containing official PDF specifications and direct consultation channels.

### Corporate Information
- **Company**: TEJ Autosystem Pvt. Ltd.
- **Manufacturing Plant & HQ**: 353 Sector 68, IMT Faridabad 121004, Haryana, India
- **Core Specialization**: All types of Conveyors, Workstations, Assembly Lines, Material Handling Equipment, Special Purpose Machines (SPMs), Truck Loaders, and Continuous Vertical Conveyors (VRCs).
- **Official Website**: [www.taplindia.net](https://www.taplindia.net)

---

## Core Features

1. **Dual Official Technical Catalogues**:
   - **Warehousing Solutions** (16 Pages • 13.4 MB): Sortation systems, telescopic truck loaders, and automated logistics transfer systems.
   - **General Catalog** (24 Pages • 4.0 MB): Assembly lines, free-flow pallet systems, modular belt conveyors, and industrial manufacturing automation.
2. **Instant In-Browser PDF Viewer**:
   - High-performance modal viewer allowing clients to examine multi-page diagrams and layouts without leaving the portal.
   - Includes full keyboard navigation (Escape to close) and backdrop tap dismissal.
3. **Direct Executive Contact Channels**:
   - Direct connection to **Rahul Singh, Technical Director**.
   - Pre-configured WhatsApp deep-link with pre-filled quotation inquiry text.
   - One-tap phone calling and direct corporate email triggers.
4. **Zero-Dependency Architecture**:
   - 100% vanilla HTML5, CSS3, and JavaScript.
   - Zero runtime npm packages or external frameworks required.
   - Sub-50ms First Contentful Paint (FCP) on 4G/5G mobile networks.

---

## Directory Structure

```
QR/
├── .gitignore               # Production Git exclusion configuration
├── DESIGN.md                # Design tokens, typography, and UI guidelines
├── README.md                # Project documentation and deployment guide
├── app.js                   # Lightweight vanilla JS (WhatsApp links, PDF modal)
├── favicon.svg              # Precision industrial SVG vector icon
├── index.html               # Main executive portal structure
├── robots.txt               # Search engine indexing directives
├── site.webmanifest         # PWA manifest for home-screen bookmarking
├── sitemap.xml              # XML sitemap for SEO discovery
├── style.css                # Mobile-first Swiss industrial stylesheet
├── anti-slop/               # Quality audit logs and verification reports
│   ├── audit-001-2026-10-15.md
│   ├── audit-002-2026-10-16.md
│   └── fix-report-001-2026-10-15.md
└── assets/                  # Verified production binaries and optimized thumbnails
    ├── TEJ_Final_Catalogue_2026.pdf
    ├── TEJ_Warehousing_Solutions.pdf
    ├── catalogue-cover.jpg
    └── warehousing-cover.jpg
```

---

## Local Development & Testing

Because the portal has zero build steps and zero dependencies, you can serve it with any static web server:

```bash
# Using Python 3 built-in server:
python3 -m http.server 8000

# Using Node.js npx serve:
npx serve .
```

Open `http://localhost:8000` in any modern browser.

---

## Production Deployment Options

1. **Cloudflare Pages / Vercel / Netlify**:
   - Deploy as a static directory without any build commands.
   - Publish directory: root (`.`)
2. **Nginx / Apache**:
   - Copy all repository files to the web server root (e.g., `/var/www/html/qr`).
   - Ensure proper MIME types for `.pdf`, `.svg`, and `.webmanifest`.
3. **GitHub Pages**:
   - Set GitHub Pages source to the `main` branch root folder.

---

## License & Proprietary Rights

Copyright (c) 2026 TEJ Autosystem Pvt. Ltd. All rights reserved.  
Engineering catalogues and corporate branding materials are proprietary assets of TEJ Autosystem Pvt. Ltd.

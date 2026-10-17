# TEJ Autosystem Design System Specification (DESIGN.md)

## Brand Identity & Creative Direction

- **Organization**: TEJ Autosystem Pvt. Ltd.
- **Industry**: Industrial Automation, Turnkey Material Handling & Conveyor Systems
- **Location**: 353 Sector 68, IMT Faridabad 121004, Haryana, India
- **Web Presence**: [www.taplindia.net](https://www.taplindia.net)
- **Tagline**: CONVEY • AUTOMATE • INTEGRATE

## Philosophy: Swiss Industrial Precision & Zero Slop

The design language of the Executive QR Hub embodies heavy industrial engineering: clean lines, high-contrast legibility, zero decorative fluff, and instant access to actionable specifications. 

### Dial Calibration
- **ENERGY**: 2 (Focused, authoritative corporate engineering)
- **RHYTHM**: 2 (Structured, hierarchical bento-style technical cards)
- **MOTION**: 1 (Purposeful transitions only: modal slide, subtle button state feedback)

---

## 1. Color Palette

Strict adherence to a maximum of 3 core colors + 1 functional action accent:

| Role | Token | Hex Value | Usage |
|------|-------|-----------|-------|
| **Base Surface** | `--surface-base` | `#F8FAFC` | Main canvas background |
| **Card Surface** | `--surface-white` | `#FFFFFF` | Structured cards and modal containers |
| **Primary Ink** | `--ink-primary` | `#0F172A` | Primary headings, titles, high-emphasis text |
| **Secondary Ink** | `--ink-secondary` | `#334155` | Body text, technical descriptions |
| **Muted Ink** | `--ink-muted` | `#64748B` | Subtitles, page counts, metadata labels |
| **Corporate Navy** | `--navy-dark` | `#071527` | Executive masthead background |
| **Deep Industrial Navy** | `--navy-deep` | `#0A2540` | Primary buttons, active borders, brand marks |
| **Hairline Dividers** | `--line-hairline` | `#E2E8F0` | Subtle section separation |
| **Strong Borders** | `--line-strong` | `#CBD5E1` | Interactive borders, card perimeters |
| **Action Accent (WhatsApp)** | `--wa-action-green` | `#25D366` | Direct RFQ & quotation trigger rows |

---

## 2. Typography

Two deliberate type families loaded via Google Fonts:
1. **Primary UI Sans**: `Plus Jakarta Sans` (Weights: 400, 500, 600, 700, 800)
   - Used for masthead titles, section headings, executive bio, and button labels.
   - Provides sharp, geometric clarity even on compact mobile viewports.
2. **Technical Monospace / Display**: `Space Grotesk` (Weights: 500, 700)
   - Used for taglines, specification pills, file sizes, and page counts.
   - Conveys engineering precision and blueprint aesthetics.

---

## 3. Component Architecture & Tap Targets

- **Button Sizing**: Strict minimum height of `48px` ensuring full compliance with mobile tap target standards (exceeding WCAG 44px minimum).
- **Border Radii**: Calibrated 6px (`--radius-sm`) for buttons and input rows, 10px (`--radius-md`) for container cards.
- **Elevation**: Flat industrial elevation with subtle 2px-6px ambient shadows; zero blurry glow or artificial glassmorphism.
- **Deep Links**: Direct WhatsApp quotation deep-link pre-populating formal inquiry message.
- **Embedded Document Viewer**: Fullscreen responsive lightbox modal enabling instantaneous in-browser review of multi-megabyte engineering catalogues without forcing external viewer context switches.

---

## 4. Accessibility & Quality Standards

- **WCAG AA Compliance**: All typography achieves contrast ratios greater than 4.5:1 against light surfaces and 7:1 against navy surfaces.
- **Keyboard Navigation**: Complete `Tab`, `Shift+Tab`, `Enter`, and `Escape` support for modal dismissal.
- **Zero AI Slop**: Strict ban on em dashes in copy, no fabricated data or fake testimonials, and zero external patch scripts.

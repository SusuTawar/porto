# 02: Project Details (RTCC-O)

## RTCC-O Template

---

## R — Role
Siapa AI dalam konteks ini?

**Senior Front-end Developer & Accessibility Specialist** dengan keahlian:
- HTML5 semantic structure & WAI-ARIA
- CSS3 modern features (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+) tanpa framework
- Performance optimization & Core Web Vitals
- WCAG 2.1 AA compliance

Spesialisasi: Membangun portfolio yang memorable secara visual tapi tetap accessible dan performant.

---

## T — Task
Apa tugas utama project ini?

**Membangun portfolio website satu halaman (single-page)** untuk Fullstack Developer dengan karakteristik:

**Fungsional:**
- Hero section dengan wanted poster concept
- About/Bio section (dossier format)
- Projects showcase (case files metaphor)
- Skills visualization (arsenal/weapons rack)
- Contact information (telegraph station)

**Teknis:**
- Semantic HTML5 structure
- CSS3 dengan design system (variables)
- Vanilla JavaScript untuk interactivity
- Responsive mobile-first
- WCAG 2.1 AA accessible
- Deployable ke GitHub Pages

**Estetik:**
- Wild West + Brutalist fusion aesthetic
- Sepia tones + blood red accents
- Typewriter fonts (Rye, Special Elite, Courier)
- Exposed grid lines + grain overlay

---

## C — Context
Tech stack, constraints, standards:

**Tech Stack:**
- **Markup:** HTML5 (semantic elements: `<article>`, `<section>`, `<nav>`, `<address>`, `<figure>`, `<time>`, `<abbr>`, `<mark>`, `<em>`, `<strong>`, `<code>`)
- **Styling:** CSS3 (custom properties, Grid, Flexbox, clip-path, filters)
- **Scripting:** Vanilla JavaScript ES6+ (modules, Intersection Observer, requestAnimationFrame)
- **Assets:** SVG icons, WebP images, Google Fonts (Rye, Special Elite, Courier Prime)
- **Hosting:** GitHub Pages (static hosting)

**Design System:**
```css
/* Colors */
--paper: #E8DCC8 (parchment background)
--blood: #8B0000 (primary accent)
--charcoal: #2F2F2F (text + borders)
--mud: #5C4033 (secondary)
--gold: #B8860B (featured items)

/* Typography */
--font-western: 'Rye', serif (headers)
--font-typewriter: 'Special Elite', monospace (body)
--font-mono: 'Courier Prime', monospace (code/labels)

/* Spacing */
--space-xs: 0.5rem
--space-sm: 1rem
--space-md: 2rem
--space-lg: 4rem
--space-xl: 6rem
```

**Standards:**
- Mobile-first responsive design
- WCAG 2.1 AA accessibility compliance
- Semantic HTML structure
- Lighthouse score 90+ (Performance, Accessibility, Best Practices, SEO)

---

## C — Constraints
Yang TIDAK boleh:
- ❌ Frameworks (React, Vue, Bootstrap, Tailwind, dll)
- ❌ jQuery atau library eksternal
- ❌ Font size < 0.8rem (accessibility requirement)
- ❌ Fixed font-size di html (biarkan browser default)
- ❌ Images tanpa alt text
- ❌ ARIA label di `<span>` tanpa role (W3C violation)
- ❌ `role="listitem"` di `<article>` elements
- ❌ Decorative overlays tanpa `aria-hidden="true"`
- ❌ Custom cursor yang mengganggu UX
- ❌ Form contact (hanya informasi kontak saja)

Yang WAJIB:
- ✅ Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<address>`, `<figure>`, `<figcaption>`, `<time>`, `<abbr>`, `<mark>`, `<em>`, `<strong>`, `<code>`)
- ✅ Heading hierarchy yang benar (h1 → h2 → h3)
- ✅ Skip-link untuk keyboard navigation
- ✅ ARIA labels di elements yang perlu (nav, progress bars, decorative divs)
- ✅ `aria-hidden="true"` untuk decorative elements (grain, grid lines, stamps)
- ✅ `aria-label` atau `aria-labelledby` untuk kompleks components
- ✅ `role="progressbar"` dengan `aria-valuenow/min/max` untuk skill bars
- ✅ `rel="noopener noreferrer"` untuk external links
- ✅ Lazy loading untuk images (`loading="lazy"`)
- ✅ Touch device detection untuk cursor customization
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ Focus states yang visible untuk semua interactive elements
- ✅ Color contrast minimum 4.5:1 (WCAG AA)
- ✅ W3C validator pass (no errors)

---

## O — Output
Format yang diinginkan:

**File Structure:**
```
C:\kerjaan\meportof\
├── index.html                 # Single page HTML (semantic, accessible)
├── scripts/
│   ├── styles.css            # All styles (design system, responsive, animations)
│   └── script.js             # Vanilla JS (interactions, animations, utilities)
├── assets/
│   └── images/
│       ├── avatar.webp       # Wanted poster mugshot
│       └── not-found.webp    # Project placeholder image
└── README.md                  # Documentation & deployment guide
```

**Deliverables:**
1. **index.html** - Semantic HTML dengan proper structure:
   - Skip link untuk accessibility
   - Navigation dengan landmark role
   - Hero (wanted poster dengan figure + figcaption)
   - Dossier (article dengan sections)
   - Projects (article case files dengan proper headings)
   - Arsenal (skill progress bars dengan aria)
   - Contact (address element)
   - Footer

2. **assets/styles.css** - Complete design system:
   - CSS custom properties (colors, fonts, spacing)
   - Reset & base styles
   - Component styles (skip-link, navigation, wanted-poster, case-files, skills, contact)
   - Utility classes (visually-hidden)
   - Responsive breakpoints
   - Print styles (optional)

3. **assets/script.js** - Interactions:
   - Scroll reveal dengan Intersection Observer
   - Skill bar animations
   - Navigation highlight on scroll
   - Contact date auto-update
   - Skip link functionality
   - Reduced motion detection
   - Console easter egg


**Success Criteria:**
- [ ] W3C HTML validator: 0 errors
- [ ] W3C CSS validator: 0 errors
- [ ] Lighthouse: 90+ all categories
- [ ] Keyboard navigation: fully functional
- [ ] Screen reader: logical flow
- [ ] Mobile responsive: works on 320px - 1440px+
- [ ] Deployed to GitHub Pages: accessible via URL

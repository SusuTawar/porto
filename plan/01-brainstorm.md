# 01: Brainstorm

## Langkah

### 1. Kirim Prompt ke AI

**Prompt 1:**
```
Role: Creative director untuk portfolio website
Task: Design konsep portfolio untuk Fullstack Developer dengan pengalaman healthcare & ERP

Context:
- Nama: Lendra Dwi Putra
- Skills: Laravel, React, Vue, PHP, JavaScript, TypeScript
- Lokasi: Depok, Indonesia
- Target audience: Tech startups, hiring managers, remote work opportunities
- Unique value: "Zero-to-one" product development, AI-augmented workflow

Constraints:
- Harus beda dari portfolio developer pada umumnya (no more template portfolios)
- Harus mencerminkan personality: builder, problem solver, fast-paced
- Professional tapi memorable
- Bisa dihost di GitHub Pages (static site)

Output yang dibutuhkan:
1. 3 konsep desain dengan moodboard reference
2. Rekomendasi teknologi stack
3. Struktur konten (apa aja yang harus ada)
4. 1 "wow factor" yang bisa diimplementasi
```

**Prompt 2:**
```
Dari 3 konsep tersebut, saya tertarik dengan yang "Wild West meets Brutalist". 

Pertanyaan:
1. Bagaimana balance antara aesthetic yang "raw/unfinished" dengan kredibilitas profesional?
2. Apa saja elemen visual spesifik yang bisa mengkomunikasikan "Wild West" tanpa terlihat cheesy/cringe?
3. Font pairing apa yang cocok untuk kombinasi ini?
4. Bagaimana dengan accessibility (WCAG compliance)? Bisa accessible tanpa merusak aesthetic?
```

**Prompt 3:**
```
Untuk konsep Wild West Brutalist portfolio:

Pallete apa yang paling cocok untuk:
1. Membaca kode/computer screen metaphor
2. Wanted poster authenticity
3. Accessibility (contrast ratios)

Juga butuh rekomendasi untuk:
- Typography yang readable tapi tetap ada Western feel
- Bagaimana presentasi "case files" (projects) tanpa terlihat seperti template
- Unique interaction yang bisa diimplementasi dengan vanilla JS
```

**Prompt 4:**
```
Final decision checkpoint sebelum masuk design phase:

Konsep: Wild West Brutalist Portfolio
- Hero: Wanted poster format
- Typography: Rye (Western) + Special Elite (typewriter) + Courier (code)
- Colors: Blood red (#8B0000), Parchment (#E8DCC8), Charcoal (#2F2F2F)
- Sections: Wanted (hero), Dossier (about), Case Files (projects), Arsenal (skills), Telegraph (contact)

Critical questions:
1. Apakah "bounty" concept bisa offend hiring manager? Alternatifnya?
2. Bagaimana dengan mobile responsiveness? Brutalist design bisa jadi cluttered di mobile
3. Performance impact dari grain overlay dan animations?
4. SEO considerations untuk struktur HTML yang brutalist?

Need go/no-go decision dengan reasoning.
```

---

## Dokumentasi

### Prompt 1 - Brief Awal
```
Role: Creative director untuk portfolio website
Task: Design konsep portfolio untuk Fullstack Developer dengan pengalaman healthcare & ERP

Context:
- Nama: Lendra Dwi Putra
- Skills: Laravel, React, Vue, PHP, JavaScript, TypeScript
...
```

### AI Response 1
**Konsep 1: Corporate Minimalist**
- Clean, white space, Inter font
- Pros: Safe, professional
- Cons: Generic, forgettable
- **Verdict: REJECTED** - Too similar to every other portfolio

**Konsep 2: Dark Mode Developer**
- VS Code theme, monospace fonts, syntax highlighting
- Pros: Developer-friendly
- Cons: Overused, no personality
- **Verdict: REJECTED** - Seen it 1000 times

**Konsep 3: Wild West + Brutalist**
- Wanted poster metaphor
- Exposed structure, raw aesthetics
- Sepia tones + blood red accents
- Typewriter fonts + harsh borders
- Pros: Memorable, shows confidence, unique
- Cons: Risky, polarizing
- **Verdict: SELECTED** - High risk, high reward

**Rekomendasi Teknologi:**
- Static HTML/CSS/JS (no frameworks - shows raw skill)
- GitHub Pages hosting
- Vanilla JS animations (proves JS mastery without libraries)

**Struktur Konten:**
1. Hero - Wanted poster with bounty
2. Dossier - Bio + Education + Languages
3. Case Files - 6 projects (categorized)
4. Arsenal - Skills with progress bars
5. Telegraph Station - Contact info

**Wow Factor:**
- Custom cursor that changes on interactive elements
- Scroll-triggered animations (reveal)
- Grain overlay for film/aged paper feel
- "Case file" metaphor untuk projects

---

### Prompt 2 - Detail Execution
```
Bagaimana balance antara aesthetic yang "raw/unfinished" dengan kredibilitas profesional?
```

### AI Response 2
**Balance Strategy:**
- Brutalism = Intentional rawness, not sloppy
- Every "exposed" element must be precisely placed
- Grid lines visible but mathematically exact
- Typography distressed but perfectly readable
- Content quality must exceed design polish

**Elemen Visual Wild West (Non-Cringe):**
1. Wanted poster format for hero (instant recognition)
2. Typewriter fonts (Special Elite) - authentic, not decorative
3. Sepia + blood red palette (limited, not rainbow)
4. Weathered paper texture (subtle grain overlay)
5. Stamps/seals (but modernized - "APPROVED", "VERIFIED")
6. Harsh borders and exposed structure (brutalist)

**Font Pairing Recommendation:**
- **Rye** (Google Fonts) - Western headers
- **Special Elite** - Body text, typewriter feel
- **Courier Prime** - Code/technical terms
- All monospace-adjacent = cohesive

**Accessibility Strategy:**
- High contrast ratios (charcoal on parchment = 7:1)
- Semantic HTML (nav, main, section, article)
- ARIA labels for decorative elements
- Keyboard navigation (skip-link)
- Screen reader announcements for animations
- **Crucial:** Test with actual screen readers

---

### Prompt 3 - Color & Typography Finalization
```
Pallete apa yang paling cocok ...
```

### AI Response 3
**Blood red + cream + charcoal**

**Rationale:**
- Blood red (#8B0000): Wanted poster authenticity, danger, attention
- Parchment (#E8DCC8): Readable background, aged paper feel
- Charcoal (#2F2F2F): Code/editor metaphor, professional anchor
- Mud (#5C4033): Secondary accent, earth tone
- Gold (#B8860B): Accent for featured items

**Accessibility Check:**
- Charcoal on Parchment: 7.2:1 (AAA)
- Blood red on Parchment: 4.5:1 (AA minimum)
- White on Charcoal: 12:1 (AAA)
- All combinations pass WCAG 2.1 AA

**Case Files Presentation:**
- Card-based but styled as "classified documents"
- Each project = one case file
- Meta info: Case number, status (active/solved/cold), date
- Visual: Slight rotation for each card (-1deg, 0.5deg, etc.)
- Hover: Card straightens + scales (interaction feedback)

**Unique Interaction (Vanilla JS):**
- Scroll reveal with Intersection Observer
- Skill bars animate when scrolled into view
- Parallax effect on wanted poster (subtle mouse follow)
- Stamps animate (scale + rotate) on page load

---

### Prompt 4 - Go/No-Go Decision
```
Final decision checkpoint sebelum masuk design phase...
```

### AI Response 4
**Go/No-Go Analysis:**

**Risk 1: Bounty Concept Offensiveness**
- Concern: "WANTED" might imply criminality
- Mitigation: Clear context (developer skills, not crimes)
- Decision: PROCEED with $3.50 bounty (meme reference)
- Fallback: Change to "REWARD" without dollar amount

**Risk 2: Mobile Responsiveness**
- Concern: Brutalist designs often fail on mobile
- Mitigation: Single column layout, reduced borders on small screens
- Decision: PROCEED with mobile-first CSS
- Critical: Test on actual devices, not just DevTools

**Risk 3: Performance**
- Concern: Grain overlay + animations = jank?
- Mitigation: CSS-only grain (data URI), requestAnimationFrame
- Decision: PROCEED with performance budget (Lighthouse 90+)
- Fallback: Remove grain on low-end devices

**Risk 4: SEO**
- Concern: Brutalist HTML might lack semantic structure
- Mitigation: Proper heading hierarchy (h1→h2→h3), meta tags, alt text
- Decision: PROCEED with semantic HTML + ARIA
- Critical: Validate with W3C + screen readers

**FINAL DECISION: GO**

**Rationale:**
- Risk is manageable with proper implementation
- Unique positioning worth the effort
- Shows technical skill (vanilla JS, CSS mastery)
- Memorable = more interview opportunities
- Can iterate based on feedback

---

## Key Decisions

| Decision | Value | Why |
|----------|-------|-----|
| **Design Direction** | Wild West + Brutalist fusion | High risk but high reward. Memorable, shows confidence, stands out from generic "clean" portfolios. |
| **Hero Concept** | Wanted poster with $3.50 bounty | South Park reference (tree fiddy) shows personality. $3.50 = "priceless but humble" instead of serious dollar amount. |
| **Typography** | Rye (headers) + Special Elite (body) + Courier Prime (code) | Rye = instant Western recognition without being cheesy. Special Elite = authentic typewriter. Courier = dev credibility. All cohesive. |
| **Color Palette** | Blood red, Parchment, Charcoal, Mud, Gold | Passes WCAG AA. Blood red for wanted poster authenticity. Parchment for readability. Charcoal for code metaphor. |
| **Tech Stack** | Static HTML/CSS/JS, GitHub Pages | Proves raw skills without framework crutches. Fast hosting. Free. Shows "I can build from scratch." |
| **Content Structure** | 5 sections (Wanted, Dossier, Case Files, Arsenal, Telegraph) | Narrative flow: Who → What (projects) → How (skills) → Contact. Western metaphor consistent throughout. |
| **Case Files Metaphor** | Projects as classified documents | Avoids boring "Projects" grid. Adds narrative. Each case has status (active/solved/cold) which shows project lifecycle. |
| **Accessibility** | Semantic HTML, ARIA labels, skip-link, keyboard nav | Accessibility != boring design. Proves professional maturity. Expands audience (keyboard users, screen readers). |
| **Performance** | CSS-only effects, lazy loading, vanilla JS | No framework bloat. Fast load = better UX. Lighthouse 90+ target. |
| **Mobile Strategy** | Brutalist elements reduced on small screens | Maintains aesthetic on desktop, usability on mobile. Single column layout for <768px. |

---
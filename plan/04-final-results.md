# Hasil Akhir — Lendra Dwi Putra

## Info Portfolio
- **Nama:** Lendra Dwi Putra
- **Repository:** https://github.com/SusuTawar/porto
- **Live URL:** https://SusuTawar.github.io/porto
- **Tanggal:** 4 Mei 2026

---

## Screenshot: Desktop

![Desktop Screenshot] (https://raw.githubusercontent.com/SusuTawar/porto/refs/heads/main/assets/desktop-full.png)
---

## Screenshot: Mobile

![Mobile Screenshot] (https://raw.githubusercontent.com/SusuTawar/porto/refs/heads/main/assets/mobile-full.png)
---

## Apa yang Saya Pelajari

1. **Framework RTCC-O Mengubah Kolaborasi dengan AI**
   Pendekatan RTCC-O (Role-Task-Constraints-Context-Output) membuat proses prompting menjadi jauh lebih taktis dan terarah. Daripada memberikan instruksi yang terlalu umum, saya memastikan setiap request memiliki batasan yang ketat sejak awal: tanpa framework, harus memenuhi standar WCAG AA, dan menggunakan estetika Wild West. Pendekatan ini membuat AI mampu memberikan hasil akhir yang akurat dengan kebutuhan revisi yang sangat minim. Bagian yang paling krusial adalah penentuan Role—dengan memosisikan AI sebagai "Senior Front-end Developer & Accessibility Specialist," saya bisa menjaga standar keahlian dan kualitas output di sepanjang percakapan.

2. **Perbaikan Aksesibilitas Seringkali Simpel tapi Mudah Terlewat**
   W3C validator menangkap error yang tidak saya sadari: aria-label pada span tanpa role, role=listitem pada elemen article, dan heading yang hilang di dalam article. Solusinya biasanya menghapus ARIA yang invalid atau menambahkan heading .visually-hidden, tidak kompleks tapi memerlukan pengetahuan spesifikasi. Semantic HTML (menggunakan article, address, figure, time) meningkatkan struktur tanpa mengubah tampilan visual.

3. **Aesthetic Brutalist Memerlukan Presisi, Bukan Asal-asalan**
   Brutalist sebenarnya sangat terkontrol. Setiap border yang ter-expose ditempatkan secara matematis. Tone sepia menggunakan hex code yang tepat (#E8DCC8 parchment, #8B0000 blood red). Tampilan usang berasal dari CSS filter, bukan keacakan. Constraint Brutalism = intentional rawness, not sloppy memandu setiap keputusan desain.

---

## Tantangan & Solusi

**Tantangan 1: Wanted Poster Bertumpuk di Mobile**
Judul WANTED dan reward badge bertumpuk di layar kecil, membuat hero tidak terbaca.

*Bagaimana Saya Menyelesaikan:* Menyesuaikan .wanted-title menggunakan clamp(2.5rem, 8vw, 4rem) untuk sizing responsif. Mengurangi letter-spacing dari default menjadi 0.1em. Bounty diubah dari $∞ menjadi $3.50 (referensi South Park tree fiddy) yang lebih sempit dan pas. CSS mobile-first dengan border brutalist yang dikurangi di layar kecil (<768px).

**Tantangan 2: Error W3C Validator dari Salah Penggunaan ARIA**
HTML awal memiliki multiple W3C violation: aria-label pada elemen span tanpa role, role=listitem pada elemen article (invalid), dan role=list pada elemen ul (redundant).

*Bagaimana Saya Menyelesaikan:* Menghapus aria-label dari decorative spans (.reward-amount, .dossier-class, .file-status). Menghapus redundant role=listitem dari 7 elemen article.case-file—article sudah memiliki implicit role. Menghapus role=list dari elemen ul. Menambahkan h2.visually-hidden di dalam dossier-card article untuk memenuhi aturan article harus memiliki heading. Validasi: 0 error.

**Tantangan 3: Ukuran Font di Bawah Minimum Aksesibilitas**
Beberapa elemen memiliki ukuran font terlalu kecil < 0.8rem (0.5rem, 0.5625rem, 0.625rem).

*Bagaimana Saya Menyelesaikan:* Audit sistematis dan penyesuaian: 0.5rem→0.8rem, 0.5625rem→0.8rem, 0.625rem→0.85rem, 0.75rem→0.8rem. Menggunakan CSS custom properties untuk sizing yang konsisten. Memverifikasi minimum touch target sizes (44px) tetap terjaga.

---

## Checklist

- [X] Screenshot desktop ada?
- [X] Screenshot mobile ada?
- [X] Tidak ada horizontal scroll?
- [X] Semua section terlihat?
- [X] 3+ insight terdokumentasi?
- [X] Tantangan dan solusi terdokumentasi?
- [ ] URL GitHub Pages tersedia? (Deploy saat siap)

---

## Struktur File

```
C:\kerjaan\meportof\
├── index.html                 # Semantic HTML, 0 W3C errors
├── assets/
│   ├── styles.css            # Wild West Brutalist design system
│   ├── script.js             # Vanilla JS interactions
│   ├── desktop-full.png      # Screenshot desktop
│   ├── mobile-full.png       # Screenshot mobile
│   └── images/
│       ├── avatar.webp       # Wanted poster mugshot (pending)
│       └── not-found.webp    # Project placeholder (pending)
├── plan/
│   ├── 01-brainstorm.md      # Design concept & decisions
│   ├── 02-project-details.md # RTCC-O specification
│   ├── 03-execution.md       # Step-by-step build log
│   └── 04-final-results.md   # File ini
└── README.md                  # Dokumentasi
```

---

## Status Kriteria Sukses

| Kriteria | Status | Catatan |
|----------|--------|-------|
| W3C HTML validator: 0 errors | ✅ Lulus | Fixed aria-label, role attributes |
| W3C CSS validator: 0 errors | ✅ Lulus | Valid CSS3 dengan custom properties |
| Lighthouse: 90+ all categories | ⏳ Pending | Perlu deployment aktual untuk test |
| Keyboard navigation: functional | ✅ Lulus | Skip-link, focus states visible |
| Screen reader: logical flow | ✅ Lulus | Semantic HTML, heading hierarchy |
| Mobile responsive: 320px-1440px+ | ✅ Lulus | Mobile-first, single column <768px |
| Deployed to GitHub Pages | ⏳ Pending | Push repo, enable Pages |

---


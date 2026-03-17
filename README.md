# Saadhana GN · Portfolio — Next.js

Bento-grid editorial portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. No backend required — the contact form opens a mailto link.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Open http://localhost:3000
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       ← Global styles, CSS variables, grain overlay
│   ├── layout.tsx        ← Root layout + metadata
│   └── page.tsx          ← Composes all sections
├── components/
│   ├── Navbar.tsx        ← Sticky nav with active section tracking
│   ├── HeroSection.tsx   ← 3-column bento hero grid
│   ├── StatsRow.tsx      ← 4-stat highlight cards
│   ├── AboutSection.tsx  ← Bio + info + pull-quote
│   ├── ResumeSection.tsx ← Timeline cards (dark + sage)
│   ├── ServicesSection.tsx ← 6 coloured service cards
│   ├── SkillsSection.tsx ← Pills cloud + animated domain bars
│   ├── ProjectsSection.tsx ← Mosaic project bento
│   ├── BannerSection.tsx ← CTA banner with rings
│   ├── ContactSection.tsx ← Contact info + mailto form
│   ├── SectionHeader.tsx ← Reusable section header
│   └── Footer.tsx
├── public/
│   └── images/           ← Drop your bg1_remove.png here
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🖼️ Adding Your Photo

Drop your background-removed photo into:
```
public/images/bg1_remove.png
```

Then update `HeroSection.tsx` — replace the emoji placeholder with:
```tsx
import Image from "next/image";

// Inside the photo card div:
<Image
  src="/images/bg1_remove.png"
  alt="Saadhana Ganesa Narasimhan"
  fill
  className="object-cover object-top"
/>
```

## 🎨 Design Tokens

All colours live as CSS variables in `app/globals.css`:

| Variable     | Value     | Usage             |
|-------------|-----------|-------------------|
| `--cream`   | #FAF6EF   | Page background   |
| `--ink`     | #1C1410   | Dark card/text    |
| `--rust`    | #C4582A   | Primary accent    |
| `--sage`    | #7B9E87   | Secondary accent  |
| `--plum`    | #6B3D5E   | Tertiary accent   |
| `--gold`    | #D4A017   | Highlight accent  |

## 📦 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect your repo at vercel.com — zero config needed.

## 🔧 Customisation Checklist

- [ ] Replace photo in `public/images/`
- [ ] Update email/LinkedIn/GitHub links in `ContactSection.tsx`
- [ ] Update CV Google Drive link in `AboutSection.tsx` and `ResumeSection.tsx`
- [ ] Add/remove projects in `ProjectsSection.tsx`
- [ ] Adjust skills in `SkillsSection.tsx`
- [ ] Update job entries in `ResumeSection.tsx`

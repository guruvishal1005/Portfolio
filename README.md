# Guru Vishal — Portfolio

A dark, terminal-inspired developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Adapted from the "Portfolio (Community)" Figma design.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- `next/font` (Fira Code)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
app/            # App Router entry (layout, page, global styles)
components/     # UI sections (Navbar, Hero, Projects, Skills, ...)
data/           # All site content lives in data/portfolio.ts
public/         # Static assets (profile photo)
```

## Editing Content

All text content (bio, projects, skills, experience, achievements, contact
details) is centralized in [`data/portfolio.ts`](./data/portfolio.ts). Edit that
file to update the site — no component changes required.

## Replacing the Photos

The site uses two images: `public/profile-hero.png` (hero section) and
`public/profile-about.png` (about section). Replace them with your own (keep the
same filenames, or update the `src` in `components/Hero.tsx` and
`components/About.tsx`).



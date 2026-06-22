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

## Deployment (GitHub Pages + custom domain)

This site is configured for **static export** (`output: "export"` in
`next.config.mjs`), so `npm run build` produces a fully static site in `out/`
that GitHub Pages can serve. A GitHub Actions workflow
(`.github/workflows/deploy.yml`) builds and deploys automatically on every push
to `master`.

### One-time setup

1. **Enable Pages via Actions**
   GitHub repo → **Settings → Pages → Build and deployment → Source** →
   select **GitHub Actions** (not "Deploy from a branch").

2. **Push to `master`** — the workflow builds and deploys automatically.
   Watch progress under the repo's **Actions** tab.

3. **Custom domain (`guruvishal.com`)**
   The `public/CNAME` file already pins the domain. In **Settings → Pages →
   Custom domain**, confirm `guruvishal.com` is set, then enable
   **Enforce HTTPS** once the certificate is issued.

4. **DNS records** (add these at your domain registrar):

   For the apex domain `guruvishal.com` — add four **A** records:

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   And (recommended) four **AAAA** records:

   ```
   2606:50c0:8000::153
   2606:50c0:8001::153
   2606:50c0:8002::153
   2606:50c0:8003::153
   ```

   For `www.guruvishal.com` — add one **CNAME** record pointing to:

   ```
   guruvishal1005.github.io
   ```

DNS can take a few minutes to a few hours to propagate. After that,
`https://guruvishal.com` will serve the site.

> **Note:** `.nojekyll` is included so GitHub Pages serves the Next.js `_next/`
> assets correctly (Jekyll otherwise ignores files/folders starting with `_`).

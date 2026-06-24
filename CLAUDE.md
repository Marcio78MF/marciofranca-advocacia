# CLAUDE.md — Márcio França Advocacia

## Project Overview

Law firm website for **Márcio França Advocacia** (OAB/AC 2882), based in Rio Branco, Acre, Brazil. Static SPA deployed on **Vercel** as a client-only build. The site covers practice areas in social security (BPC/LOAS, rural retirement), banking (consignado fraud), consumer (Energisa), family law, criminal law, and agribusiness (land regularization, environmental compliance).

Production URL: `https://marciofranca.adv.br`

## Tech Stack

- **Framework**: React 19 + TypeScript (strict mode)
- **Build**: Vite 7 with `@vitejs/plugin-react` and `@tailwindcss/vite`
- **Styling**: Tailwind CSS 4 with CSS variables, design system in `client/src/index.css`
- **UI Components**: shadcn/ui (New York style, non-RSC) in `client/src/components/ui/`
- **Routing**: wouter (lightweight, client-side)
- **Animations**: Framer Motion + custom `useReveal` IntersectionObserver hook
- **Icons**: lucide-react
- **Fonts**: Fraunces (serif display) + Plus Jakarta Sans (UI sans-serif)
- **Package Manager**: pnpm (v10.4.1, declared in `packageManager` field)
- **Deployment**: Vercel (static, `vercel.json` with SPA rewrites)
- **Analytics**: Umami (self-hosted, injected via env vars)

## Commands

```bash
pnpm dev            # Dev server on port 3000
pnpm build          # Client build (Vite) + server bundle (esbuild)
pnpm build:client   # Client-only build (used by Vercel)
pnpm check          # TypeScript type-check (tsc --noEmit)
pnpm format         # Prettier format all files
pnpm preview        # Vite preview of production build
```

## Directory Structure

```
client/
  index.html              # HTML entry point (pt-BR, OG meta, fonts)
  public/
    images/               # Optimized images (.webp, .jpg, .png)
    favicon.ico
    sitemap.xml           # Static sitemap
    robots.txt
  src/
    main.tsx              # React root mount
    App.tsx               # Router (wouter Switch) + providers
    index.css             # Design system: colors, typography, animations
    const.ts              # OAuth/session constants (re-exports from shared)
    lib/
      site.ts             # FIRM data, AREAS array, POSTS array, helpers
      seo.ts              # useSeo hook, JSON-LD schema generators
      utils.ts            # cn() utility (clsx + tailwind-merge)
    components/
      Layout.tsx           # Header + main + Footer + WhatsAppFab
      Header.tsx           # Navigation
      Footer.tsx           # Footer with links and firm info
      Bits.tsx             # Reusable UI bits: Eyebrow, CtaButtons, CtaBand, LinkArrow
      AreaCard.tsx          # Practice area card component
      Authority.tsx         # Authority/trust section
      Faq.tsx              # FAQ accordion
      GoogleReviews.tsx     # Reviews section (placeholder structure)
      HowItWorks.tsx        # Process steps section
      Map.tsx              # Google Maps embed
      SeoLocal.tsx          # Local SEO content section
      WhatsAppFab.tsx       # Floating WhatsApp button
      Logo.tsx             # Firm logo
      ErrorBoundary.tsx    # React error boundary
      ui/                  # shadcn/ui primitives (do not edit manually)
    hooks/
      useReveal.ts         # Scroll-reveal animation via IntersectionObserver
      useMobile.tsx        # Mobile breakpoint hook
      useComposition.ts    # IME composition state hook
      usePersistFn.ts      # Stable callback ref
    contexts/
      ThemeContext.tsx      # Light/dark theme (defaults to light, not switchable)
    pages/
      Home.tsx             # Landing page
      Areas.tsx            # All practice areas listing
      AreaPage.tsx         # Dynamic practice area detail (/:slug)
      Agro.tsx             # Agro hub (rural/environmental law)
      Sobre.tsx            # About the firm
      Blog.tsx             # Blog listing
      BlogPost.tsx         # Blog post detail (/blog/:slug)
      Diagnostico.tsx      # Legal diagnostic form (client-side, no data stored)
      NotFound.tsx         # 404 page
server/
  index.ts                # Express server (production static serving + SPA fallback)
shared/
  const.ts                # Shared constants (cookie name, expiry)
patches/
  wouter@3.7.1.patch      # Patched wouter dependency
```

## Architecture

### Data-Driven Content

All practice area content and blog posts live in `client/src/lib/site.ts` as typed TypeScript arrays (`AREAS` and `POSTS`). There is no CMS or database. To add a new practice area or blog post, add an entry to the respective array.

The `Area` type defines: slug, title, category, icon, summary, problem description, FAQ, documents list, situations, benefits, legal foundations, and workflow steps.

### Routing

wouter handles all client-side routing. Area pages use a dynamic `/:slug` route that validates against known slugs from `AREAS`. Blog posts use `/blog/:slug`. Vercel's `rewrites` rule sends all paths to `index.html` for SPA behavior.

### SEO

Each page calls `useSeo()` to set `<title>`, meta description, Open Graph tags, canonical URL, and JSON-LD structured data. Schema types include `Attorney`, `LegalService`, `FAQPage`, and `BreadcrumbList`.

### Design System ("Legal Tech Sereno")

Defined in `client/src/index.css` using Tailwind CSS 4 `@theme` and CSS custom properties:
- **Colors**: Navy (`--navy: oklch(0.32 0.06 250)`), Silver, Ivory, Agro green
- **Fonts**: `--font-serif: Fraunces` for headings, `--font-sans: Plus Jakarta Sans` for body
- **Animations**: Elements with `.reveal` class animate on scroll via `useReveal` hook

### WhatsApp Integration

Primary CTA. The `whatsapp()` function in `site.ts` generates `wa.me` links with pre-filled messages. Each practice area has a custom `ctaWhatsapp` message. The floating WhatsApp button appears on all pages.

## Key Conventions

- **Language**: All content is in Brazilian Portuguese (pt-BR). Code identifiers (variables, functions) mix Portuguese and English.
- **No backend state**: The site is fully static. The Diagnostico form composes a WhatsApp message client-side; no data is stored server-side.
- **shadcn/ui components** in `components/ui/` are generated — do not manually edit these files. Use `npx shadcn@latest add <component>` to add new ones.
- **Images** are stored locally in `client/public/images/` (optimized .webp/.jpg). No external CDN dependency.
- **Reviews** are placeholder structure (`REVIEWS_PLACEHOLDER = true`). Do not fabricate testimonials.

## Code Style

- **Prettier** is configured (`.prettierrc`): double quotes, semicolons, trailing commas (es5), 2-space indent, 80 char print width, LF line endings.
- TypeScript strict mode enabled.
- Path aliases: `@/` → `client/src/`, `@shared/` → `shared/`.
- Prefer functional components with hooks.
- Use `cn()` from `@/lib/utils` for conditional class merging.

## Environment Variables

Referenced via Vite's `import.meta.env`:
- `VITE_OAUTH_PORTAL_URL` — OAuth portal (unused in current static deployment)
- `VITE_APP_ID` — Application ID (unused in current static deployment)
- `VITE_ANALYTICS_ENDPOINT` — Umami analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` — Umami website tracking ID

## Deployment

Vercel static deployment:
- Build command: `npm run build:client`
- Output directory: `dist/public`
- Framework: Vite
- SPA rewrite: `/(.*) → /index.html`
- Asset caching: immutable for `/assets/*`

## Important Notes

- The Express server (`server/index.ts`) exists for potential self-hosted production use but is **not used by Vercel**. Vercel uses the client-only build.
- The `package-lock.json` is present but pnpm is the actual package manager (use `pnpm install`, not `npm install`).
- The `wouter` package has a local patch (`patches/wouter@3.7.1.patch`).
- When adding new area pages, also update `client/public/sitemap.xml`.

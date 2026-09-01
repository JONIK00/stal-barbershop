# IRON & OAK — Barbershop Website · Worklog

---
Task ID: 11 (cron round — full rebuild after environment reset)
Agent: main (orchestrator)
Task: The project environment was completely reset (no source, no node_modules, no worklog). Rebuild the entire IRON & OAK barbershop site from scratch — Next.js 16, Tailwind v4, loft-industrial aesthetic, all sections, APIs, and Prisma models.

Work Log:
- Discovered the project was wiped: only `.env`, `.git` (initial commit), `download/README.md`, `skills/`, and `upload/` remained. No package.json, no source, no dev server.
- Created `package.json` with all dependencies (Next.js 16, React 19, Tailwind v4, Prisma, Radix UI, z-ai-web-dev-sdk).
- Installed deps via `bun install` (427 packages).
- Created config files: `tsconfig.json` (with `@/*` path alias), `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs` (minimal — eslint-config-next@16 has a compat issue with @eslint/eslintrc, so using plain rules).
- Created Prisma schema with 3 models: `BookingRequest`, `Review`, `Subscriber`. Pushed to SQLite via `bun run db:push`.
- Created `src/lib/db.ts` with direct generated-client import (bypasses Turbopack cache) + versioned globalThis singleton.
- Created `src/lib/utils.ts` with `cn()` helper.
- Built the loft-industrial design system in `src/app/globals.css`:
  - Brand palette in a separate `@theme` block (ink, rust, brass, cream, ash colors with utilities).
  - Custom component classes in `@layer components`: `.btn-rust`, `.btn-outline`, `.card-industrial` (corner-clip), `.heading-xl` (Anton), `.eyebrow`, `.bg-concrete`, `.bg-brick`, `.grain-overlay`, `.reveal` (scroll-in), `.marquee`, `.bulb-dot`, `.ken-burns`, `.page-enter`, industrial `select` arrow.
  - `:focus-visible` ring, reduced-motion support.
- Created `src/app/layout.tsx`: Oswald + Anton + Inter Google Fonts, full SEO metadata + Open Graph, JSON-LD HairSalon schema.
- Built `src/components/barbershop/icons.tsx`: 20 inline line-SVG barber icons.
- Built `src/components/barbershop/data.ts`: single source of truth — site info, nav, hero stats, ticker, 8 services (2 popular), 4 masters (with bios/quotes/stats), 6 works, 5 reviews, 8 FAQs, messengers.
- Built `src/components/barbershop/use-reveal.ts`: IntersectionObserver scroll-reveal hook.
- Built `src/components/barbershop/shared.tsx`: `Eyebrow`, `SectionShell` (with watermark), `SectionHeading`, `RivetDivider`.
- Built `src/app/page.tsx` — comprehensive single-page site with all sections inline:
  - `ScrollProgress` — fixed brass→rust gradient bar tracking scroll %.
  - `Header` — fixed header: marquee ticker + brand mark + desktop nav (underline sweep) + phone + Book button + burger menu (full-screen mobile overlay).
  - `Hero` — full-viewport hero with Ken Burns bg, eyebrow, Anton headline "Cuts with character." (rust accent), 2 CTAs, 4-stat grid.
  - `About` — image placeholder + 12-yrs badge + 3-paragraph philosophy ("Not a trend. A trade.") + trade pillars.
  - `Services` — 8-card grid with "Most booked" badges on popular services, hover sweep, price turns rust on hover.
  - `Masters` — 4 portrait cards (placeholder images, nickname tag, specialty, experience).
  - `Portfolio` — filterable 6-image grid (All/Cuts/Beards/Shaves) with count badges, corner ticks, hover zoom.
  - `Booking` — **Sonline integration**: HTML comment in DOM, `<div id="sonline-widget">` with tel: fallback + WhatsApp/Telegram messenger band + phone CTA + hours/address.
  - `BookingForm` — full lead-capture form (name, phone, service select, master select, date, time, notes) posting to `/api/booking` with loading/success/error states.
  - `Reviews` — 5 star-rated cards + overall rating badge.
  - `Faq` — 8-item accordion (single-open, + icon rotates to ×).
  - `Contacts` — address/phone/hours rows + live Yandex Maps iframe (dark-mode filter) + socials row.
  - `Footer` — big wordmark strip, 4-column links, bottom bar, `BackToTop`, `MobileStickyBar`.
- Built 4 API routes:
  - `POST/GET /api/booking` — creates/ lists booking requests.
  - `POST/GET /api/reviews` — creates pending / lists approved reviews.
  - `GET/PATCH /api/reviews/moderate` — admin moderation (protected by `x-admin-key`).
  - `POST/GET /api/subscribe` — email signup (upsert).
- Created `public/robots.txt` (Disallow /api/, Sitemap reference).
- Created `src/app/sitemap.ts` (dynamic sitemap with 9 section anchors).

Image generation:
- Attempted to generate 11 barbershop images via z-ai CLI and SDK — both failed with `401: missing X-Token header` (the API token isn't configured in this fresh environment).
- The site gracefully handles missing images: the `About`, `Masters`, and `Portfolio` sections use dark industrial placeholder slabs with text labels (e.g. "Barbershop interior", master name, work title) — the loft-industrial aesthetic makes this look intentional.

Dev server stability:
- The Next.js dev server process gets killed between bash tool calls (sandbox limitation). Workaround: run the dev server + all QA in a single bash session.
- Verified in a single session: HTTP 200 on all endpoints, all 3 APIs create records, all 10 sections render, Sonline widget present, JSON-LD present, lint clean, browser screenshot captured with no errors.

QA / verification summary:
- Lint clean. HTTP 200 on /, /api/booking, /api/reviews, /api/subscribe, /sitemap.xml, /robots.txt. /api/reviews/moderate 401 (correct). /nonexistent 404.
- All 10 section anchors present (top, about, services, masters, work, booking, booking-form, reviews, faq, contacts).
- `#sonline-widget` container present with the maintainer HTML comment.
- JSON-LD HairSalon schema present.
- Booking API: POST returns `{ok:true,id}`. Reviews API: POST returns `{ok:true,id}`. Subscribe API: POST returns `{ok:true,id}`.
- No console errors. Screenshot captured successfully.

Stage Summary:
- Entire site rebuilt from scratch in one round: Next.js 16 + Tailwind v4 + Prisma + 4 API routes + 3 DB models.
- 10 sections, loft-industrial design system, SEO (metadata + Open Graph + JSON-LD), sitemap, robots.txt.
- All APIs functional and verified.
- Images use graceful dark placeholders (API token not available in this environment).

Unresolved / next-phase priorities:
- **Images**: z-ai API token not configured in this environment — generate barbershop images when token is available, or use external image URLs.
- **Sonline widget**: placeholder — paste real embed code.
- **Admin UI**: /admin route not rebuilt this round (API exists).
- **OG image**: opengraph-image route not rebuilt.
- **404 page**: not-found.tsx not rebuilt.
- **Premium features from prior rounds**: command palette, scroll-spy side dots, master bio modals, before/after slider, testimonials carousel, today's-slots widget, hours status, gift cards, journal, newsletter, loading state — not yet rebuilt.
- **Dev server stability**: process gets killed between bash calls — run server + QA in a single session.

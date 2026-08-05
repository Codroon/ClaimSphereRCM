# ClaimSphere RCM — Revamp Status

New **Next.js 15 (App Router)** app living in `web/`. It is a clean, SSR/SEO-ready
rebuild of the original Create React App site (`frontend/`), porting every existing
component so nothing visual is lost.

## Run it

```bash
cd web
npm install        # already run
npm run dev        # http://localhost:3000
npm run build      # production build (verified passing)
npm run start      # serve the production build
```

The old CRA app in `frontend/` is untouched and still runnable, so the live site
keeps working until you cut over.

---

## Developer-guide mapping

### ✅ Done — P0 Foundation (the framework migration)
This is the item everything else depended on.

| Guide item | Status |
|---|---|
| Migrate CRA SPA → Next.js App Router | ✅ `web/` |
| Server-rendered HTML before JS (`export default function Page`) | ✅ verified — H1/copy in raw HTML |
| Per-page `<meta>`, OG, canonical via `generateMetadata` | ✅ layout + every page |
| `sitemap.xml` (app/sitemap.js) | ✅ `/sitemap.xml` |
| `robots.txt` (app/robots.js) | ✅ `/robots.txt` |
| Organization / MedicalBusiness JSON-LD | ✅ `app/layout.js` + `lib/site.js` |
| Article JSON-LD on blog posts | ✅ `app/blog/[slug]/page.js` |
| Deploy to Vercel/Netlify | ⏳ ready (zero-config Next) — not yet deployed |

### ✅ Hero (P0) — largely already present, carried over
H1 headline, KPI stat pills, two CTAs, dark medical-gradient background are all in
the ported `components/Hero.jsx`. (Guide-suggested polish like count-up animation and
an Unsplash photo background can be layered on.)

### ✅ Done — P1 High priority
| Guide item | Status |
|---|---|
| TrustBar with certification + HIPAA badges | ✅ `components/TrustBar.jsx` (placeholder badges — swap for official logos) |
| KPI row with animated count-up | ✅ `components/MetricCards.jsx` (IntersectionObserver + rAF count-up) |
| ServicesProcess 7-step flow | ✅ `components/ServicesProcess.jsx` + `data/services.js` |
| Per-service SEO subpages (`/services/[slug]`) | ✅ 7 SSG pages w/ generateMetadata + Service JSON-LD |
| Testimonials Review + AggregateRating JSON-LD | ✅ `app/page.js` (built from placeholder testimonials) |
| WhoWeServe segments + specialty list | ✅ `components/WhoWeServe.jsx` |

### ✅ Done — Navigation & structure revamp (usamedworks-inspired)
| Item | Status |
|---|---|
| Nav: Services / Specialties / Resources dropdowns | ✅ `components/Header.jsx` (desktop hover + mobile accordion) |
| Hero rebuilt — two-column with lead-capture form | ✅ `components/Hero.jsx` (marquee + 3D loop removed) |
| Specialties: 16 specialty pages + overview | ✅ `/specialties` + `/specialties/[slug]` (SSG, per-page metadata, MedicalBusiness JSON-LD) |
| About page | ✅ `/about` |
| FAQ section + FAQPage JSON-LD | ✅ `components/FAQ.jsx` + schema on home |
| Removed from landing: Blog section, Demo, Join-Our-Team | ✅ |
| Footer relinked to real service/specialty/about/FAQ pages | ✅ |
| Sitemap: + about, specialties, 16 specialty routes | ✅ 37 total routes |

Total pre-rendered routes: **37** (home, about, specialties overview, 16 specialties, 7 services, blog + 4 posts, privacy, sitemap, robots).

### ⏳ Not yet built — needs decisions / real content
| Guide item | Blocker |
|---|---|
| Team / Leadership section | Real headshots + bios |
| AuditForm + `/api/audit-request` route + `/thank-you` | Decision: kept current submit-form.com provider for now |
| Analytics (GA4/Vercel), chat widget, cookie consent | Accounts/keys + decision |
| Replace placeholder copy/metrics in new sections | Verified numbers + real positioning from client |

> ⚠️ **Compliance note:** the testimonials, stats (e.g. "99% reduction in denials"),
> and certification badges currently shown are placeholder/marketing data carried over
> from the original site. Before launch, replace fabricated testimonials and any
> association logos the company isn't actually a member of — these carry FTC/trademark
> risk for a U.S. healthcare brand.

## What changed in the port (for reviewers)
- `react-router-dom` → `next/link` + `next/navigation` (`usePathname`, `useRouter`).
- `BlogPost` now receives `blog` as a prop; the server page resolves the slug,
  handles `notFound()`, and emits Article JSON-LD.
- All interactive components marked `'use client'`; pages stay server components so
  HTML is server-rendered for SEO.
- Fonts via `next/font` (Inter). Only the 8 shadcn UI components actually used were
  ported (not all ~40).
- Form submission still posts to `submit-form.com` exactly as before.

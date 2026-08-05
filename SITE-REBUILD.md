# ClaimSphere RCM — Site Rebuild

A full rebuild of the ClaimSphere RCM marketing site. The previous site (a
client-rendered Create React App SPA in `frontend/`) was migrated to a
server-rendered **Next.js** app in `web/`, restructured to mirror the reference
site the client supplied (usamedworks.com) **in ClaimSphere's own navy / teal /
green theme, with all copy rewritten from scratch** (no competitor content
copied).

The old `frontend/` (CRA) and `backend/` (FastAPI) folders are left untouched.
The live app is `web/`.

---

## Tech stack

- **Next.js 15** (App Router) + **React 19**, JavaScript/JSX (no TypeScript, to
  reuse the existing components).
- **Tailwind CSS** + **shadcn/ui** (Radix primitives) + **lucide-react** icons +
  **sonner** toasts.
- Fully **SSR / SSG** — every page is statically generated (`generateStaticParams`
  + `generateMetadata`), with per-page metadata, canonical URLs, OpenGraph, a
  `sitemap.xml`, `robots.txt`, and JSON-LD structured data.
- Forms post to the client's **submit-form.com** endpoint (shared helper in
  `web/lib/submitLead.js`).

---

## Run it

```bash
cd web
npm install
npm run dev      # http://localhost:3000 (we developed on -p 4500)
npm run build    # production build — ~77 static pages
```

---

## Pages

| Route | What it is |
|-------|------------|
| `/` | Landing page (see section order below) |
| `/services` | Services index |
| `/services/[slug]` | 7 service detail pages (SSG) |
| `/specialties` | Specialties index |
| `/specialties/[slug]` | 19 specialty detail pages (SSG) |
| `/blog` | Blog listing with category filter + search |
| `/blog/[slug]` | 40 blog posts (SSG) |
| `/about` | About page |
| `/contact` | Dedicated contact page + Google map |
| `/privacy-policy` | Privacy policy |
| `sitemap.xml`, `robots.txt` | SEO |

---

## Landing page section order

Mirrors the reference site, rendered in ClaimSphere's theme:

`Hero → TrustBar → Our Services → How It Works → Start Now (stats) →
Trust Badges → Why ClaimSphere (values) → Who Are We (+ pain-point form) →
Specialties → Why Choose Us → Google rating band → Testimonials →
Nationwide Reach → In-House vs ClaimSphere (compare) → Free RCM Audit →
FAQs → Contact → Final CTA → Footer`

- **Hero** — two-column: animated headline + inline lead form (left), photo with
  floating metric cards (right).
- **Who Are We** — company copy (left) + a pain-point checkbox lead form (right).
- **Colour rhythm** — dark navy sections (Hero, How It Works, Why ClaimSphere,
  Testimonials, Compare, FAQ, Footer) are always separated by light sections; no
  two dark sections are adjacent.
- **Leadership (Team)** — built but currently **hidden** in `web/app/page.js`
  (re-add before FAQs when real team photos/bios exist).
- **WhatsApp button** — floating click-to-chat button, bottom-right.

---

## Services

Renamed to match the reference's service names, each with its own SSG page:

Revenue Cycle Management · Medical Billing Services · Medical Billing Audit ·
Eligibility Verification · Denial Management · Credentialing Services ·
Medical Coding.

Per-page content (`web/data/service-content.js`) was authored in-house — original
wording, structure informed by comparable industry pages, no competitor facts.

## Specialties

19 specialties, each with an SSG detail page and rephrased content.

## Blog

- **40 posts** total (10 pre-existing + 30 new). The 30 new posts were authored
  in-house, topic/structure informed by the reference's 30 posts, **fully
  rewritten** — no competitor name or facts, defensible claims only, real
  widely-published codes in the reference tables.
- **Renderer** (`web/components/BlogPost.jsx`) supports a lightweight markup:
  `**Heading**`, `- bullet`, `1. numbered`, `| markdown | tables |`, `[IMG:src]`,
  and inline `**bold**`.
- **Post layout** — enlarged navy hero (copy left, image right, like the detail
  pages) with the article in a wide white container below.
- **Images** — a curated 40-image pool (`web/lib/images.js`); blogs use
  index-based assignment (`blogImage`) so every post gets a **distinct** image.

## Contact page

Dedicated `/contact` page: hero, contact info + form (Name / Email / Phone /
Avg. Monthly Collection / Message), and an embedded **Google map** pinned to the
office address. Footer "Contact" links here.

---

## SEO / structured data

- Per-page `generateMetadata`, canonical URLs, OpenGraph.
- JSON-LD: Organization, MedicalBusiness, Service, ItemList, Article,
  Review/AggregateRating, FAQPage.
- `sitemap.xml` covers all static + service + specialty + blog + contact routes;
  `robots.txt` in place.

---

## ⚠️ Before launch — replace placeholder / unverified data

These are marked with `NOTE:` comments in code. **Do not ship as-is.**

1. **Review ratings** (`web/data/trustBadges.js`, `web/data/reviews.js`) — Google
   4.9 / 248, Serchen 4.8, Trustpilot 4.9 were provided as real. Add each
   platform's **public profile URL** so the badges link out and are verifiable
   (Google/Trustpilot require their marks link to your real rating).
2. **"SOC 2 Certified"** badge in the footer — confirm ClaimSphere actually holds
   SOC 2, or remove it.
3. **ONC "Authorized Certification Body"** badge — **deliberately NOT added.**
   ONC-ACB is a federal designation held only by health-IT certification labs
   (Drummond, Leidos, ICSA, SLI), listed publicly on the CHPL. A billing company
   claiming it would be a false federal-authorization claim. Only add if
   ClaimSphere is genuinely listed on the CHPL.
4. **Performance figures** — 99% clean-claim, 7 days in AR, 32% denial reduction,
   the "Start Now" stat tiles, and the Why-Choose-Us claims (5+ years, all-50-
   states coverage) are placeholder/positioning values. Confirm with the client.
5. **Comparison / pricing** — the in-house-vs-ClaimSphere copy uses generic cost
   categories (no specific dollar figures). Real pricing model still needed for a
   proper side-by-side.
6. **Testimonials** (`web/data/mock.js`) — placeholder names/quotes; the
   AggregateRating JSON-LD on the home page is built from them. Replace with real,
   attributable reviews or gate the schema.
7. **Leadership / Team** (`web/data/team.js`) — placeholder names + avatar
   images; the section is hidden until real people are supplied.
8. **WhatsApp number** (`web/components/WhatsAppButton.jsx`) — derived from the
   company phone `+1 (307) 400-1621`; confirm that line is WhatsApp-enabled or set
   the correct number.
9. **Contact map** — uses Google's keyless embed; swap to a Google Maps Embed API
   key if you want it guaranteed/branded.

---

## Follow-ups not yet built (originally P2)

- Analytics (GA4 / Vercel), a chat widget, a HIPAA cookie-consent banner.
- Downloadable cheat-sheet PDFs (the reference offers them; we dropped the
  "Download PDF" headings rather than ship dead buttons).

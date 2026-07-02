# Connect+Funda — Site Shell: Integration & Deployment Guide

This package is the **shell** that ties your site together: the **Home** and **About** pages, plus the shared **header and footer** that appear on every page. It has a **slot** for each of your three finished landing pages (Schools, CSR/NPO, Tertiary). Your developers drop the finished pages into the slots, and the whole thing becomes one navigable site — so a prospect who lands on, say, the Tertiary page can still click Home, About or Plans.

---

## 1. What you need — the short version (for everyone)

You're 90% there. Your devs have built the three landing pages. What's left is exactly three things:

1. **Build Home + About** — done; they're in this package, finished.
2. **One shared header + footer** — done; it lives in this shell and renders on every page, which is what lets a visitor jump from any landing page to Home / About / Plans.
3. **Assemble** — mount each finished landing page into its slot in this shell, then deploy the whole thing as one site under `connectandfunda.co.za`.

**My recommendation:** bring the three landing pages **into this one project** (rather than keeping three separate live sites). Because every page is built on the same toolset (React + Vite + Tailwind), this is a drop-in — and it's the only way to get truly seamless navigation (instant page switches, one menu defined in one place, nothing to keep in sync). Details below for the devs.

---

## 2. How the pieces fit

```
connectandfunda.co.za        ← one project, one deploy
├─ /            Home          (in this shell)
├─ /about       About         (in this shell)
├─ /schools     Schools page  ← mount finished page in the slot
├─ /csr         CSR / NPO page← mount finished page in the slot
├─ /tertiary    Tertiary page ← mount finished page in the slot
└─ Plans  →     links to the plan suite (connect-and-funda.vercel.app/#plans)

           ┌─────────────────────────────────────────┐
Every route │  shared SiteHeader (nav) + SiteFooter   │  ← defined once
           └─────────────────────────────────────────┘
```

The shared header/footer are the integration. Whichever page a visitor opens, the same menu is on top, so About / Home / Plans are always one click away.

---

## 3. Integrating the three finished pages (developers)

Each landing page becomes a route in `src/App.tsx`, replacing its `<LandingSlot .../>` placeholder. Two cases:

**A. The page is built on the shared `LandingPage` engine + a config** (as the originals were):
```tsx
import LandingPage from './components/LandingPage';      // copy the engine in if not present
import { schoolsConfig } from './config/schools.config'; // copy the config in
// ...
<Route path="schools" element={<LandingPage config={schoolsConfig} embedded />} />
```
`embedded` hides the landing page's own mini logo-header, because the global `SiteHeader` already provides navigation.

**B. The page is a self-contained component:**
```tsx
import SchoolsLanding from './pages/SchoolsLanding';
<Route path="schools" element={<SchoolsLanding />} />
```
In this case, **remove that page's own top nav** when you mount it — the global header replaces it. Keep its body and (if you like) its page-specific footer, or switch to the shared `SiteFooter`.

Do the same for `/csr` and `/tertiary`. That's the whole integration.

> Tip: copy each landing page's `src/config/*.config.tsx`, any unique components, and its `src/assets/*` into this project, then add the route. Because all the pages share the same Tailwind `cf` palette and fonts, they'll look consistent automatically.

---

## 4. Why one project (and the alternative)

**Recommended — one project (this shell + the three pages):**
- One menu, defined once → never drifts out of sync.
- Instant, app-like navigation between pages (no full reloads).
- One build, one deploy, one CDN config.
- Cheapest to host (static files) and simplest to maintain.

**Alternative — keep three separate live sites:** doable, but each separately-deployed page must embed the *same* header/footer (shared as a small internal component package, or copied and kept in sync), and all must be served under one domain via sub-paths (Hostinger subdirectories or a reverse-proxy / rewrites). Downsides: the menu is duplicated across repos and must be kept identical, and moving between pages is a full page load. Use this only if there's a hard reason the pages can't live in one repo.

---

## 5. Run, build, deploy

```bash
npm install
npm run dev      # http://localhost:5173  — visit /, /about, /schools, /csr, /tertiary
npm run build    # type-checks then builds to /dist
npm run preview  # serve the built /dist to check
```

Deploy: upload the contents of **`/dist`** to your web root (Hostinger `public_html`) and point the CDN at `/dist/assets/`. Deep links like `/csr` need the server to return `index.html` — handled by the included `public/.htaccess` (Apache/Hostinger), which ships into `/dist` automatically. A GitHub Actions build/deploy snippet is the same as your other projects (`checkout` → `setup-node` → `npm ci` → `npm run build` → deploy `/dist`).

---

## 6. What's in this shell

```
connectfunda-shell/
├─ public/.htaccess              SPA deep-link fallback
├─ src/
│  ├─ App.tsx                    routes + the three landing-page slots
│  ├─ components/
│  │  ├─ Layout.tsx              global header + page outlet
│  │  ├─ SiteHeader.tsx          shared navigation (single source of truth)
│  │  ├─ SiteFooter.tsx          shared footer
│  │  ├─ LandingSlot.tsx         placeholder marking where a page mounts
│  │  └─ Icon.tsx
│  ├─ pages/
│  │  ├─ Home.tsx                finished Home (the "lobby")
│  │  └─ About.tsx               finished About / leadership / compliance
│  ├─ config/
│  │  ├─ brand.ts                brand tokens + contact details
│  │  └─ types.ts                shared landing-page config types
│  ├─ hooks/useReveal.ts
│  └─ assets/                    Home/About images + logo
└─ package.json
```

The engine (`LandingPage.tsx`) and the landing-page configs are **not** included here — those live with your finished pages; copy them in during integration (Section 3).

---

## 7. Open items

1. **Mount the three pages** into the slots (Section 3).
2. **Plans** links to the plan suite at `connect-and-funda.vercel.app/#plans`. When the plan suite moves under this domain, swap the external link in `SiteHeader.tsx` / `SiteFooter.tsx` / `Home.tsx` for an internal route.
3. **Forms** on the landing pages → wire to your Laravel `/api/partnership-leads`.
4. **About page polish** — real leadership headshots, and confirm the PAIA/EULA link path in `SiteFooter.tsx`.

*Prepared for Connect+Funda Mobile (Enthucate Tech Pty Ltd). Hand to Godfrey Marange (CTO) and Wisdom Moyo (front-end).*

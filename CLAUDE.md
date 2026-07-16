# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the repo root unless noted.

**Development (local dev server):**
```bash
cd client && npm start
```

**Production build + serve:**
```bash
npm run buildClient   # installs deps and builds client/build/
npm run serveClient   # serves client/build/ via `serve -s build`
```

## Architecture

This is a client-only React SPA — there is no backend in this repository. The root `package.json` is a thin wrapper with build/serve scripts; all application code lives under `client/`.

**Routing** (`client/src/App.js`): React Router v6 defines all routes. Adding a new page means creating the component under `client/src/pages/` and adding a `<Route>` here.

**Pages** (`client/src/pages/`): Each page composes `Header` and `Footer` and handles its own layout. Top-level pages are `Home`, `About`, `Contact`, and `DeveloperPortfolio`. Sub-directories exist for related page groups:
- `IceMaps/` — ice climbing location maps (HyaliteCanyon, CodyIce)
- `MediaPages/` — photo gallery, video gallery, blog

**Components** (`client/src/components/`): Four shared components, each a directory with an `index.js` and co-located CSS — `Header` (custom navbar with scroll state and dropdown menus; no react-bootstrap), `Footer`, `DevTools` (skills display used on the DeveloperPortfolio page), and `ClimbingStats` (climbing data visualizations used on the About page — location/route data lives in constant arrays at the top of its `index.js`).

**Responsive layout**: Handled via CSS `@media` queries in each page/component stylesheet. One legacy exception: `MediaPages/VideoGallery.js` still uses the old pattern of an `if (window.innerWidth < 600)` JS branch returning a separate mobile JSX tree. The `_Full.css` (desktop) / `_Mobile.css` (mobile) file pairs under `css/` (DeveloperPortfolio, AboutMe) are remnants of that old pattern.

**CSS** (`client/src/css/`): Global styles loaded in `App.js` — `theme.css`, `reset.css`, `style.css`, and `import.css` (font-face declarations). Per-page CSS imported directly in each page file.

**Assets**: Resume PDF lives at `client/src/assets/Clayton_Skaggs_Resume.pdf`. Images are in `client/src/img/` with subdirectories (`Icons/`, `AboutMe/`, `headerBackground/`, `DemoGIFs/`). The PDF is rendered on the DevPortfolio page using `@mikecousins/react-pdf`'s `usePdf` hook with a `<canvas>` ref.

**Content note — location**: The site owner is based in Phoenix, AZ (relocated from Denver, CO in mid-2026). Current-location copy (Contact card, Home "Home Base" stat tile, About bio, Pico Edge timeline entry) says Phoenix; timezone copy says "MST year-round" (Arizona observes no DST). References to Denver/Colorado in the About timeline and ClimbingStats data are historical and intentional — do not "fix" them.

**Deployment**: Hosted on Railway at `https://www.claytonskaggs.dev`. GitHub repo is `DesertCow/portfolio2023`.

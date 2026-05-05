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

**Pages** (`client/src/pages/`): Each page composes `Header` and `Footer` and handles its own layout. Sub-directories exist for related page groups:
- `IceMaps/` — ice climbing location maps (HyaliteCanyon, CodyIce)
- `MediaPages/` — photo gallery, video gallery, blog

**Components** (`client/src/components/`): Three shared components — `Header` (React Bootstrap navbar with dropdown menus), `Footer`, and `DevTools` (skills display used on the portfolio page).

**Responsive layout pattern**: Mobile vs. desktop layouts are handled by an `if (window.innerWidth < 600)` branch inside each component that returns a different JSX tree, **not** via CSS media queries. Separate CSS files are used for each breakpoint, named `_Full.css` (desktop) and `_Mobile.css` (mobile), co-located with the page that uses them.

**CSS** (`client/src/css/`): Global styles in `style.css`, `reset.css`, and `import.css` (font-face declarations). Per-page CSS imported directly in each page file.

**Assets**: Resume PDF lives at `client/src/assets/Clayton_Skaggs_Resume.pdf`. Images are in `client/src/img/` with subdirectories (`Icons/`, `AboutMe/`, `headerBackground/`, `DemoGIFs/`). The PDF is rendered on the DevPortfolio page using `@mikecousins/react-pdf`'s `usePdf` hook with a `<canvas>` ref.

**Deployment**: Hosted on Railway at `https://www.claytonskaggs.dev`. GitHub repo is `DesertCow/portfolio2023`.

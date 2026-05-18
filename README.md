# Flow State — BJJ Attack Decision Map (iOS / PWA)

**Live app:** [https://iphoenix227.github.io/Flow-State---BJJ-Attack-Decision-Map/](https://iphoenix227.github.io/Flow-State---BJJ-Attack-Decision-Map/)

This branch ships Flow State as a **Progressive Web App (PWA)** for iPhone, iPad, and Android. No App Store, no Windows launcher, no local Node setup for end users — open the link, install to your home screen, and train.

> **Desktop / Windows users:** use the [`main`](https://github.com/iphoenix227/Flow-State---BJJ-Attack-Decision-Map/tree/main) branch with `Flow_State.bat` for the one-click local launcher.

---

## Quick start (iPhone)

1. Open the [live app](https://iphoenix227.github.io/Flow-State---BJJ-Attack-Decision-Map/) in **Safari**.
2. Tap **Share** → **Add to Home Screen**.
3. Launch **Flow State** from your home screen for full-screen, app-like use.

**Android (Chrome):** open the link → menu → **Install app** or **Add to Home screen**.

The first visit needs internet. After install, the attack map and UI are cached for offline or spotty gym Wi‑Fi.

---

## What's on this branch

| Feature | Description |
| -------- | ------------ |
| **PWA** | Installable icon, standalone display, service worker caching |
| **Mobile layout** | Slide-out menu, touch-friendly filters, pinch-zoom attack tree |
| **GitHub Pages** | Auto-deploy on push to `ios` or `main` |
| **Data backup** | Export / import JSON in the sidebar (drills, log, filters, videos) |
| **Filter memory** | Ruleset, skill, and priority filters persist across sessions |
| **Install hint** | Dismissible banner with iOS install steps (until added to home screen) |

Same V5 content as desktop: **149 attacks**, **272 partner responses**, mistake reactions, drill tracker, training log, glossary, concepts, grips, and stats.

---

## Using the app

### Navigation

- **Menu (☰)** — positions, filters, pages, and data backup (phone/tablet).
- **Search** — moves, responses, and notes; tap a result to jump into the tree.
- **Attack tree** — tap an action to expand; tap a response for follow-ups; pinch to zoom and drag to pan.
- **Move panel** — tap a node for details, drill marking, and videos; tap outside the panel (or **X**) to close on mobile.

### Filters

- **Phone:** tap filter pills to combine (e.g. Gi + White + A-game).
- **Desktop:** Ctrl/Cmd+click to multi-select; plain click selects one (tap again to clear).
- **Chain family** — checkboxes in the sidebar.

### Your data (this device only)

Progress lives in the browser — not in the cloud.

| Stored | Contents |
| ------ | -------- |
| Drill progress | Techniques marked as drilled, with dates |
| Training log | Sparring journal entries |
| Video URLs | Links saved per technique slot |
| Filters & preferences | Ruleset/skill/priority, mistake visibility |
| Last position | Where you left off in the tree |

**Back up before switching phones or clearing Safari data:** sidebar → **Your data** → **Export backup**. Restore with **Import backup** (replaces data on this device).

---

## For developers

### Prerequisites

- Node.js 20+ (24 recommended)
- npm

### Local development

```bash
npm ci
npm run dev
```

Open **http://localhost:8080**

### Production build & preview

```bash
npm run build
npm run preview
```

Test the GitHub Pages base path locally:

```bash
# PowerShell
$env:VITE_BASE_PATH="/Flow-State---BJJ-Attack-Decision-Map/"; npm run build; npm run preview
```

### Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Dev server with HMR (port 8080) |
| `npm run build` | Production build → `dist/` + PWA assets |
| `npm run preview` | Serve `dist/` locally |
| `npm run icons` | Regenerate PWA icons from `public/favicon.svg` |
| `npm test` | Run tests |
| `npm run lint` | ESLint |

### Deploy (maintainers)

Pushes to **`ios`** or **`main`** run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

1. **Settings → Pages → Build and deployment:** source = **GitHub Actions**.
2. **Settings → Environments → `github-pages`:** allow **`ios`** (and `main` if needed) under deployment branches.

Site URL: `https://<user>.github.io/Flow-State---BJJ-Attack-Decision-Map/`

### Project layout

```text
public/                 PWA icons, favicon
scripts/                Icon generation
src/
  components/
    TreeView/           ReactFlow attack tree
    Sidebar/            Nav, filters, backup
    InstallPrompt/      Add-to-home-screen hint
    DataBackup/         Export / import UI
  lib/                  bjj data helpers, backup, layout
  store/                Zustand + localStorage
.github/workflows/      GitHub Pages deploy
```

### Tech stack

React 18 · TypeScript · Vite 5 · Tailwind · shadcn/ui · Zustand · ReactFlow · Recharts · vite-plugin-pwa

---

## Branch comparison

| | **`ios` (this branch)** | **`main`** |
| --- | --- | --- |
| Distribution | Hosted URL + PWA | Clone repo + `Flow_State.bat` |
| Target | Phone / tablet | Windows desktop |
| Offline | After install (cached) | Local dev server |
| Deploy | GitHub Actions → Pages | User runs locally |

---

## Contributing

Issues and PRs welcome. See [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md), [Code of Conduct](.github/CODE_OF_CONDUCT.md), and [SECURITY](.github/SECURITY.md).

---

## License

Flow State is licensed under the **PolyForm Noncommercial License 1.0.0**. Personal, educational, and hobby use is allowed; commercial use requires separate permission. See [LICENSE](LICENSE).

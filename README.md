# Flow State — BJJ Attack Decision Map (V5)

An interactive Brazilian Jiu-Jitsu attack decision map and training companion. Flow State helps grapplers visualize attack chains from every major position, explore partner reactions (including common mistakes), track drilling progress, log training sessions, and study core concepts — all in the browser with zero backend dependencies.

## Quick Start

- Download all files in the `flow_state` folder to your PC.
- Open the folder and double-click `Flow_State.bat`.
- A command terminal checks for Node.js and installs dependencies on first run.
- First run may exit with an error — that is normal. Close the terminal and run `Flow_State.bat` again.
- The launcher opens your default browser with the app hosted locally.

## What's New in V5

- **Expanded partner reactions** — **272 response branches** across **149 attack actions**, including supplemental data for all belt levels (White through Black) plus universal (“Both”) entries.
- **Correct vs. mistake reactions** — Partner mistakes (punishable errors) appear in a distinct red style; correct defensive reactions stay orange.
- **Smarter filters** — Multi-select filters with **Ctrl+click** (Ruleset, Skill, Priority). Chain Family remains checkbox multi-select.
- **Mistake visibility controls** — **Show partner mistakes** and **Mistakes only** quick filters in the sidebar (preferences saved in the browser).
- **Reaction count badges** — Each action node shows how many responses and mistakes apply under the current filters (e.g. `3 responses · 2 mistakes hidden`).
- **Filter-first tree** — Non-matching branches are hidden (not dimmed) when filters are active.
- **Header stats** — Live counts: `v5 · 149 attacks · 272 responses`.

## Features

- **Interactive Attack Tree** — Explore attack chains across **16 positions** (standing, closed guard, open guard, half guard, passing, pins, back control, front headlock, turtle, leg entanglement, and more). Zoom, pan, and click through decision trees powered by ReactFlow.
- **Partner reaction branches** — Each of your actions can branch into multiple partner responses, each with its own follow-up path.
- **Smart filtering** — Filter by ruleset (Gi / No-Gi / Both), skill level (White / Blue / Purple / Brown / Black), priority (A-game / Common / Optional), and chain family.
- **Overview-first UX** — App opens to **Position Map Overview** with defaults: **Ruleset=Gi, Skill=White, Priority=All**.
- **Drill tracker** — Mark techniques as drilled with one click. Progress is saved per technique with timestamps and shown on the Dashboard.
- **Training log** — Record sparring sessions: partner, belt, position, move, result, effectiveness, and notes.
- **Dashboard** — Charts for attacks per position, Gi vs. No-Gi, skill breakdown, chain families, and drill progress.
- **Concepts, glossary, grips, reactions** — Reference libraries and searchable terminology.
- **Full-text search** — Search across actions, responses, follow-ups, and notes.
- **Dark theme** — Custom gold styling and BJJ-themed favicon.

## Content at a Glance

| Metric | Count | Notes |
| ------ | ----- | ----- |
| Attack actions | **149** | Unique `parent_action_id` values in the dataset |
| Partner responses | **272** | Total decision branches (includes mistakes) |
| Core map rows (V4 base) | 175 | `src/data/attackingMap.ts` |
| V5 extensions | 97 | Belt-specific and all-levels supplemental reactions |
| Positions | 16 | `src/data/positions.ts` |

## Tech Stack

| Layer         | Technology                              |
| ------------- | --------------------------------------- |
| Framework     | React 18 + TypeScript                   |
| Build         | Vite 5                                  |
| UI Components | shadcn/ui (Radix primitives + Tailwind) |
| Styling       | Tailwind CSS 3                          |
| State         | Zustand                                 |
| Routing       | React Router 6                          |
| Graphs        | ReactFlow                               |
| Charts        | Recharts                                |
| Animations    | Framer Motion                           |
| Forms         | React Hook Form + Zod                   |
| Testing       | Vitest + Testing Library                |

## Prerequisites

- Windows 10/11 for one-click launch via `Flow_State.bat`
- Internet access on first run (dependency install)
- No VS Code, Python, or Git required for end users

Notes:

- If Node.js is already installed, the launcher uses it.
- If Node.js is missing, the launcher attempts automatic install with `winget`.
- For true offline sharing, bundle a portable Node runtime (see [Shareable plug-and-play package](#shareable-plug-and-play-package-windows)).

## Getting Started

> **Important:** Run from the `flow_state` folder. Opening `index.html` directly will not work — the app requires the Vite dev server.

### One-click (recommended for users)

1. Open the `flow_state` folder.
2. Double-click `Flow_State.bat`.
3. Your browser opens to the running local URL.

### Manual (developers)

```bash
cd flow_state
npm ci
npm run dev
```

Open **http://localhost:8080** in your browser.

## Shareable Plug-and-Play Package (Windows)

To make this as close to “copy and run” as possible:

1. Share the `flow_state` folder as-is (include `Flow_State.bat`).
2. Optional for offline use: add a portable Node runtime at:

```text
flow_state/runtime/node/
```

The launcher expects `runtime/node/npm.cmd`.

3. Zip the folder and share. Recipients extract and double-click `Flow_State.bat`.

Launcher behavior:

- Uses bundled portable runtime first (if present).
- Else uses system `npm`.
- Else tries `winget` install of Node LTS.
- Installs dependencies on first run, then starts the app.

## Available Scripts

| Command              | Description                                     |
| -------------------- | ----------------------------------------------- |
| `npm run dev`        | Start the Vite dev server with HMR on port 8080 |
| `npm run build`      | Create a production build in `dist/`            |
| `npm run preview`    | Serve the production build locally              |
| `npm run lint`       | Run ESLint across the project                   |
| `npm test`           | Run the test suite once                         |
| `npm run test:watch` | Run tests in watch mode                         |

## Project Structure

```text
flow_state/
  Flow_State.bat              One-click Windows launcher
  public/                     Static assets (favicon, robots.txt)
  src/
    components/
      TreeView/               Interactive attack tree (ReactFlow)
      Sidebar/                Navigation, filters, legend
      NodeDetailPanel/        Selected technique detail
      Dashboard/              Stats and drill progress
      TrainingLogPage/        Session logging
      ...                     Glossary, concepts, grips, reactions, search
    data/
      attackingMap.ts         Core attack map (175 rows, V4 base)
      *ReactionExtensions.ts  V5 supplemental reactions by belt / all levels
      reactionExtensionFactory.ts  Shared row builder for extensions
      positions.ts            16 positions
      concepts.ts, glossary.ts, grips.ts, reactions.ts, ...
    lib/
      bjj.ts                  Merged map, filters, stats (attack/response counts)
    store/
      useAppStore.ts          Zustand store + localStorage persistence
    pages/
      Index.tsx               App shell and header
  .github/                    Community health files (contributing, security, issues)
```

## Data Model (V5)

Each row in the attack map represents one **partner response branch** for a given **your action**:

| Field | Purpose |
| ----- | ------- |
| `parent_action_id` | Groups branches under one attack (e.g. `CG-A-hip-bump-sweep`) |
| `your_action` | The technique you initiate |
| `partner_response` | What your opponent does |
| `follow_up` | Your recommended reaction |
| `partner_reaction_type` | `correct` (default) or `mistake` (punishable error) |
| `skill_level` | White, Blue, Purple, Brown, Black, or Both (all levels) |

Extensions are merged at build time in `src/lib/bjj.ts` alongside the core `attackingMap.ts` dataset.

## Data Storage

All user data is stored in the browser's **localStorage** — there is no backend or database.

| Key                    | Contents                                      |
| ---------------------- | --------------------------------------------- |
| `bjj_drilled_nodes`    | Drill progress (technique ID → date drilled)  |
| `bjj_videos_v1`        | User-saved video URLs for techniques          |
| `bjj_last_position_v1` | Last viewed position                          |
| `bjj_training_log`     | Training session log entries                  |
| `bjj_show_mistakes_v1` | Whether mistake reactions are shown in tree   |
| `bjj_mistakes_only_v1` | Whether tree shows only mistake reactions     |

Clearing browser data resets progress. To back up:

```js
// Export
copy(
  JSON.stringify({
    drills: localStorage.getItem("bjj_drilled_nodes"),
    videos: localStorage.getItem("bjj_videos_v1"),
    log: localStorage.getItem("bjj_training_log"),
    showMistakes: localStorage.getItem("bjj_show_mistakes_v1"),
    mistakesOnly: localStorage.getItem("bjj_mistakes_only_v1"),
  }),
);
```

## Contributing

We welcome issues and pull requests that improve data quality, UX, or documentation. Please read:

- [Contributing Guidelines](.github/CONTRIBUTING.md)
- [Code of Conduct](.github/CODE_OF_CONDUCT.md)
- [Security Policy](.github/SECURITY.md)

## Deployment

Static single-page app — build and serve `dist/` from any static host:

```bash
npm run build
```

Works with GitHub Pages, Netlify, Vercel, Azure Static Web Apps, etc. Configure the host to serve `index.html` for all routes.

## License

Flow State is licensed under the **PolyForm Noncommercial License 1.0.0**.

You may use, copy, modify, and share this app for personal, educational, research, hobby, and other **noncommercial** purposes. Commercial use is not permitted without separate written permission.

See [LICENSE](LICENSE) for full terms.

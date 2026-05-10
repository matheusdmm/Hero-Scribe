# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

D&D Character Creator with a Go backend (Vercel Serverless Functions) and a Vue 3 frontend. The repo has two top-level directories: `api/` (Go) and `frontend/` (Vue).

## Commands

### Frontend (run from `frontend/`)

```bash
npm install          # install dependencies
npm run dev          # dev server on :5173, proxies /api → :3000
npm run build        # production build to frontend/dist
npm run preview      # preview production build
```

### Go API (run from repo root)

```bash
vercel dev           # runs both frontend and API on :3000
```

To install the Vercel CLI: `npm i -g vercel`

## Architecture

### API (`api/`)

Three Vercel Go serverless functions — each file exports a single HTTP handler:

- `classes.go` → `GET /api/classes` — returns `data.Classes`
- `races.go` → `GET /api/races` — returns `data.Races`
- `calculate.go` → `POST /api/calculate` — accepts `CharacterInput`, returns a computed `CharacterSheet` (modifiers, max HP, initiative, AC, proficiency bonus)

All game data (races, classes, structs) lives in `api/data/data.go`. Adding a race or class means editing that file only. The Go module path is `github.com/yourusername/dnd-character-creator` — update `go.mod` if the repo is ever renamed.

CORS is handled inline in each handler (wildcard `Access-Control-Allow-Origin`).

### Frontend (`frontend/src/`)

**State**: Single Pinia store (`stores/character.js`) holds `draft` (the in-progress character), `races`, `classes`, `sheet` (computed result), `currentStep`, and `loading`/`error`. The store owns all API calls via `useApi`.

**Data flow**: `CharacterCreatorView` is a multi-step wizard; each step mutates `draft` in the store. On completion, `store.calculate()` POSTs to `/api/calculate` and populates `sheet`. `CharacterSheetView` displays the result and offers JSON export.

**Composables**:
- `useApi.js` — thin `fetch` wrappers for the three endpoints
- `useAbilityScores.js` — pure ability score logic (modifier calc, standard array `[15,14,13,12,10,8]`, point-buy cost table)

**Types**: `src/types/index.js` is plain JS with JSDoc typedefs (no TypeScript). It also exports `ABILITY_NAMES`, `ABILITY_LABELS`, `ALIGNMENTS`, `BACKGROUNDS`, and `emptyCharacter()`.

**Path alias**: `@` maps to `frontend/src/` (configured in `vite.config.js`).

### Deployment

`vercel.json` at repo root configures the build (`cd frontend && npm install && npm run build`), output directory (`frontend/dist`), and rewrites — `/api/*` routes hit the Go handlers, everything else falls through to `index.html` for client-side routing.

## Key Conventions

- The `edition` field on races and classes is `"5e"`, `"5.5e"`, or `"both"`. The frontend `RaceSelector` and `ClassSelector` filter by the draft's `edition` field.
- HP formula: `hitDie + CON_mod + (level-1) * (hitDie/2 + 1 + CON_mod)` — computed server-side in `calculate.go`.
- Point buy uses a non-linear cost table (scores 8–15, cost 0–9 points); logic is in `useAbilityScores.js:POINT_BUY_COSTS`.

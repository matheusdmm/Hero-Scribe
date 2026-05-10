# D&D Character Creator

Stack: **Go** (Vercel Serverless) · **Vue 3** · **Tailwind CSS** · **Pinia**

## Project Structure

```
dnd-character-creator/
├── vercel.json               # Build & rewrite config
├── api/                      # Go serverless functions
│   ├── go.mod
│   ├── classes.go            # GET /api/classes
│   ├── races.go              # GET /api/races
│   ├── calculate.go          # POST /api/calculate
│   └── data/
│       └── data.go           # Races, classes, structs (SRD data)
└── frontend/                 # Vue 3 app
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    └── src/
        ├── main.js
        ├── App.vue
        ├── router/
        │   └── index.js
        ├── stores/
        │   └── character.js       # Pinia store (draft, races, classes, sheet)
        ├── composables/
        │   ├── useApi.js          # fetch wrappers for Go API
        │   └── useAbilityScores.js # modifier, point buy, standard array logic
        ├── types/
        │   └── index.js           # JSDoc types, constants (alignments, backgrounds)
        ├── assets/
        │   └── main.css           # Tailwind + custom component classes
        ├── views/
        │   ├── HomeView.vue
        │   ├── CharacterCreatorView.vue  # Multi-step wizard
        │   └── CharacterSheetView.vue    # Final character sheet + JSON export
        └── components/
            ├── layout/
            │   └── AppHeader.vue
            ├── ui/
            │   ├── BaseCard.vue          # Selectable card
            │   ├── AbilityScoreInput.vue # Score input with modifier display
            │   ├── StatBox.vue           # Stat display box
            │   └── StepIndicator.vue     # Wizard progress bar
            └── character/
                ├── RaceSelector.vue      # Race grid with edition filter
                ├── ClassSelector.vue     # Class grid with details panel
                ├── AbilitiesStep.vue     # Manual / standard array / point buy
                └── DetailsStep.vue      # Name, level, background, alignment
```

## Local Development

```bash
# Frontend
cd frontend
npm install
npm run dev        # runs on :5173, proxies /api → :3000

# Go API (local via vercel dev)
npm i -g vercel
vercel dev         # runs everything on :3000
```

## Deploy

```bash
vercel
```

## Next Steps

- [ ] Skill proficiency selection (based on class + background)
- [ ] Spell list per class/level
- [ ] Supabase integration to save characters
- [ ] PDF export (character sheet printable)
- [ ] 5.5e-specific features (species, background ASI flexibility)

# Instruments & Languages

A [Vite](https://vite.dev/) + [React](https://react.dev/) web application that discovers the surprising parallels between musical instruments and programming languages.

## What it does

The app asks you whether you prefer **musical instruments** or **programming languages**, then lets you pick your favourite from a curated list. It responds with a detailed side-by-side comparison card showing:

- A description of both the instrument and the language
- Shared character traits
- A list of specific analogies explaining why they are alike
- A personalised reason why you, as a fan of one, will likely love the other

### Supported pairings

| Instrument | Programming Language |
|---|---|
| 🎹 Piano | 🐍 Python |
| 🎸 Guitar | 🟨 JavaScript |
| 🎻 Violin | ⚙️ C++ |
| 🥁 Drums | 🦀 Rust |
| 🎷 Saxophone | 💎 Ruby |
| 🎺 Trumpet | ☕ Java |
| 🎸 Bass Guitar | 🐹 Go |
| 🎻 Cello | 🔷 TypeScript |

## Data

All comparison data lives in **`src/data/comparisons.json`**. Each entry in the `pairs` array has the following shape:

```json
{
  "instrument": {
    "name": "Piano",
    "emoji": "🎹",
    "description": "...",
    "traits": ["Foundational", "Expressive", "Versatile", "Structured"]
  },
  "language": {
    "name": "Python",
    "emoji": "🐍",
    "description": "...",
    "traits": ["Readable", "Versatile", "Beginner-friendly", "Expressive"]
  },
  "comparisons": [
    "Both are considered the ideal starting point for beginners …",
    "..."
  ],
  "whyYoullLoveBoth": "If you love the piano's logical layout …"
}
```

To add a new pairing, append an object with this structure to the `pairs` array — the UI will pick it up automatically.

## Getting started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Linting

```bash
npm run lint
```

## Tech stack

- [Vite 8](https://vite.dev/) — build tooling
- [React 19](https://react.dev/) — UI
- Plain CSS — styling (no framework dependency)

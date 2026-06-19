# AI Tea Seminar

Minimal Svelte webpage for the AI Tea Seminar.

## Edit seminars

Seminar entries live in `content/seminars.toml`.

Add an upcoming seminar:

```toml
[[upcoming]]
date = "2026-07-02"
time = "11:30am - 12:15pm"
room = "Seminar Room F1 ASHBi Building B"
topic = "Example topic"
speaker = "Example Speaker"
```

Move completed talks from `[[upcoming]]` to `[[past]]` when they should appear under past seminars.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

GitHub Pages deploys automatically from `main` via `.github/workflows/deploy.yml`.

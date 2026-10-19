# ביחד — אתר הנחיתה

Landing page for **ביחד** ("Together"), the Israeli political party led by
Naftali Bennett and Yair Lapid, running in the October 27, 2026 Knesset
election. Static site, written short for a skim-not-read audience, available
in Hebrew, Arabic, English and Russian.

Content (platform figures, team bios/photos, logo, brand colors) is sourced
from the party's official site, **be-yahad.org.il**, fetched 2026-10-19 — see
`materials/README.md` for exactly what was pulled from where. This started
from a generic [Stitch](https://stitch.withgoogle.com) AI template (kept
under `design/` for reference) before being rebuilt around the real party.

## Quick start

Open `index.html` in a browser — the compiled CSS is committed, so nothing has
to be built to view the site.

To serve it locally over HTTP (recommended, matches production):

```bash
npm run serve     # http://localhost:8000
```

## Editing styles

Styling is Tailwind CSS v3. Brand colors in `tailwind.config.js` were sampled
directly from the official logo and site (`primary` = `#00aaff` sky blue,
`secondary` = `#0a0084` navy, `tertiary` = `#ff4b00` accent orange-red).

```bash
npm install
npm run dev       # rebuild assets/css/styles.css on every change
npm run build     # one-off minified build
```

Edit `src/input.css` for custom CSS and `tailwind.config.js` for tokens.
**Do not edit `assets/css/styles.css` by hand** — it is generated.

**Font note:** the real site uses "Almoni ML v5 AAA," a commercial Hebrew
font we don't have a license for. This site uses Noto Sans (+ Noto Sans
Hebrew/Arabic) as the closest open substitute, covering all four languages
in one stack. Swap in Almoni in `tailwind.config.js` if font files become
available.

## Languages

Hebrew and Arabic (RTL), English and Russian (LTR). A switcher pinned to the
physical top-right corner of the header (stays there in every language — the
usual convention for a language picker) lets a visitor change it; the choice
is remembered in `localStorage`, and a first-time visitor gets their
browser's language if it's one of the four, Hebrew otherwise.

All page copy lives in `assets/js/i18n.js`, keyed to `data-i18n="section.key"`
/ `data-i18n-attr="attr:section.key"` attributes in `index.html`. Candidate
bios are separate, in `assets/js/team-data.js` (see below) — both need every
language filled in for every key/person, or that string just won't update
when switching language.

To add or edit page copy:
1. Edit the relevant language object in `assets/js/i18n.js`.
2. For **new** copy, add the key to all four language objects, then reference
   it in `index.html` the same way the existing ones are.
3. `npm run build` and reload — no separate i18n build step.

Keep copy short everywhere: headline + one short line, not a paragraph.

## Team section

`assets/js/team-data.js` holds all 20 candidates (name, age, city, role tags,
one-line bio for #1–10) in all four languages, plus their official headshot
path. `assets/js/team.js` renders it into the two grids in `index.html`
(`[data-team-full]`, `[data-team-compact]`) and re-renders on language change.
To add a candidate, add an entry to the `TEAM` array — give it a `bio` object
to make it a full card, omit `bio` for a compact one.

Only candidates 1–20 (of 35) are shown, full bios for only the first 10 —
see `plan.sourceNote` / `team.seeAll` links to the official site for the rest.

## Layout

```
index.html                The page — structure + Hebrew fallback text
src/input.css              Tailwind source + design-system components (switcher, hero gradient, team cards)
tailwind.config.js         Brand color tokens, fonts
assets/css/styles.css      Compiled output (committed, generated)
assets/js/i18n.js          All page copy (he/ar/en/ru) + language switching
assets/js/team-data.js     Candidate roster data (he/ar/en/ru)
assets/js/team.js          Renders the team grids from team-data.js
assets/img/logo.png        Official party logo
assets/img/team/           Official candidate headshots (01.jpg = Bennett, 02 = Lapid, …)
materials/                 Source material pulled from be-yahad.org.il — see materials/README.md
design/                    Original Stitch AI-template export (superseded; kept for reference)
```

## Still to wire up

- **"Join us" / "Volunteer" buttons link out** to the official site
  (`be-yahad.org.il/#footer-form` and `/volunteer/`) rather than having their
  own form — this site has no backend to collect submissions.
- **Only 6 of the party's ~30 policy platforms** are on the landing page
  (equality of burden, cost of living, education, housing, transportation,
  healthcare) — the ones with the clearest headline numbers. A link under the
  cards points to the official site for the rest; built as a separate
  policies page if that's wanted.
- **Only 20 of 35 candidates**, full bios for 10 of those — see "Team
  section" above to extend it.
- **Fonts** load from Google Fonts, so the page needs a network connection to
  look right. Self-host them if that matters; see the font note above re:
  Almoni.

## Deploying

Any static host works — GitHub Pages, Netlify, Cloudflare Pages, Vercel. Upload
the repository root; there is no server-side code and no build step at deploy
time, since `assets/css/styles.css` is committed.

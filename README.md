# ביחד נתקן — אתר הנחיתה

Landing page for **Beyachad Netaken** (ביחד נתקן), a political party in
Israel. Static site, written short for a skim-not-read audience, available in
Hebrew, Arabic, English and Russian. Built from a
[Stitch](https://stitch.withgoogle.com) design export.

## Quick start

Open `index.html` in a browser — the compiled CSS is committed, so nothing has
to be built to view the site.

To serve it locally over HTTP (recommended, matches production):

```bash
npm run serve     # http://localhost:8000
```

## Editing styles

Styling is Tailwind CSS v3 with the design tokens from `design/DESIGN.md`
mapped into `tailwind.config.js` (`primary`, `surface-container-low`,
`on-tertiary-fixed`, …).

```bash
npm install
npm run dev       # rebuild assets/css/styles.css on every change
npm run build     # one-off minified build
```

Edit `src/input.css` for custom CSS and `tailwind.config.js` for tokens.
**Do not edit `assets/css/styles.css` by hand** — it is generated.

## Languages

The site ships in four languages: Hebrew and Arabic (RTL), English and
Russian (LTR). A switcher pinned to the physical top-right corner of the
header (stays there in every language — the usual convention for a language
picker) lets a visitor change it; the choice is remembered in `localStorage`,
and a first-time visitor gets their browser's language if it's one of the
four, Hebrew otherwise.

All copy lives in one place, `assets/js/i18n.js` — there's no copy text in
`index.html` itself beyond a Hebrew fallback for no-JS/first paint. To add or
edit copy:

1. Edit the relevant language object in `assets/js/i18n.js` (`he`, `ar`,
   `en`, `ru` — each one needs every key the others have).
2. For a **new** piece of copy, add the key to all four language objects,
   then reference it in `index.html` with `data-i18n="section.key"` (sets
   `textContent`) or `data-i18n-attr="attr:section.key"` (sets an attribute,
   e.g. `alt` or a `<meta content>`) — see the existing attributes for the
   pattern. `assets/js/i18n.js` applies it to every matching element.
3. Run `npm run build` and reload — no separate i18n build step.

Keep copy short everywhere: this page is written for people who won't read
a paragraph, so a new string should read as a headline or a single short
sentence, not a block of text.

## Layout

```
index.html              The page — structure + Hebrew fallback text only
src/input.css            Tailwind source + design-system components (incl. the language switcher)
tailwind.config.js       Colour tokens, fonts, radii from DESIGN.md
assets/css/styles.css    Compiled output (committed, generated)
assets/js/i18n.js        All copy (he/ar/en/ru) + language switching
assets/js/main.js        Poll interaction (reads i18n.js for translated status text)
assets/img/hero.jpg      Hero photo (saved locally from the Stitch export)
assets/favicon.svg       Favicon
design/                  Original Stitch export: DESIGN.md, screen.png, .zip
```

## Still to wire up

- **The priorities poll** (`מה הכי דחוף לתקן מבחינתך?`) has no backend. A choice
  is saved to the visitor's own `localStorage` and nothing is submitted, so the
  UI deliberately does not claim the vote was counted. Point
  `assets/js/main.js` at a form endpoint or API to collect real answers.
- **No join / contact form.** The Stitch export has an empty placeholder for
  one (`טופס הנעה לפעולה והצטרפות`) and no fields were designed.
- **Fonts** (Rubik, DM Sans, Material Symbols) load from Google Fonts, so the
  page needs a network connection to look right. Self-host them if that matters.

## Deploying

Any static host works — GitHub Pages, Netlify, Cloudflare Pages, Vercel. Upload
the repository root; there is no server-side code and no build step at deploy
time, since `assets/css/styles.css` is committed.

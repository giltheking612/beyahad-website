# ביחד נתקן — אתר הנחיתה

Landing page for the **ביחד נתקן** civic movement. Static site, Hebrew (RTL),
built from a [Stitch](https://stitch.withgoogle.com) design export.

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

## Layout

```
index.html              The page
src/input.css           Tailwind source + design-system components
tailwind.config.js      Colour tokens, fonts, radii from DESIGN.md
assets/css/styles.css   Compiled output (committed, generated)
assets/js/main.js       Poll interaction + footer year
assets/img/hero.jpg     Hero photo (saved locally from the Stitch export)
assets/favicon.svg      Favicon
design/                 Original Stitch export: DESIGN.md, screen.png, .zip
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

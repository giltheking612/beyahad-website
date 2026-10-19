/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Real party brand, sampled directly from the official logo and site
        // (be-yahad.org.il) — see /materials/README.md for provenance.
        // Token *names* kept from the original Material-style scheme so the
        // rest of the markup/CSS didn't need touching, only the values.
        primary: '#00aaff',
        'on-primary': '#ffffff',
        'primary-container': '#0088cc',
        'on-primary-container': '#ffffff',
        'primary-fixed': '#d6f0ff',
        'primary-fixed-dim': '#7dd4ff',
        'on-primary-fixed': '#00344d',
        'on-primary-fixed-variant': '#006699',
        'inverse-primary': '#7dd4ff',

        secondary: '#0a0084',
        'on-secondary': '#ffffff',
        'secondary-container': '#2a1fb0',
        'on-secondary-container': '#ffffff',
        'secondary-fixed': '#e3e0ff',
        'secondary-fixed-dim': '#b3a8f0',
        'on-secondary-fixed': '#140a5c',
        'on-secondary-fixed-variant': '#3a2d9e',

        tertiary: '#ff4b00',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#ff7a40',
        'on-tertiary-container': '#ffffff',
        'tertiary-fixed': '#ffe0d0',
        'tertiary-fixed-dim': '#ffb088',
        'on-tertiary-fixed': '#661f00',
        'on-tertiary-fixed-variant': '#cc3d00',

        error: '#e53e3e',
        'on-error': '#ffffff',
        'error-container': '#ffe8e8',
        'on-error-container': '#9b1c1c',

        background: '#f5f8fb',
        'on-background': '#10172a',
        surface: '#f5f8fb',
        'on-surface': '#10172a',
        'surface-variant': '#e8edf3',
        'on-surface-variant': '#45506b',
        'surface-tint': '#00aaff',
        'surface-dim': '#c7d0dc',
        'surface-bright': '#ffffff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f7f9fc',
        'surface-container': '#eef2f7',
        'surface-container-high': '#e4e9f0',
        'surface-container-highest': '#d9e0ea',
        'inverse-surface': '#0a0f22',
        'inverse-on-surface': '#f5f8fb',

        outline: '#6b7690',
        'outline-variant': '#ccd4e0',
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      fontFamily: {
        // Almoni ML v5 AAA (the real site's font) is a commercial family we
        // don't have a license for — Noto Sans is the closest open
        // substitute with matching Hebrew + Arabic + Cyrillic + Latin
        // coverage in one stack. Swap in Almoni here if/when font files
        // are available (see README).
        headline: ["'Noto Sans Hebrew'", "'Noto Sans Arabic'", "'Noto Sans'", 'system-ui', 'sans-serif'],
        display: ["'Noto Sans Hebrew'", "'Noto Sans Arabic'", "'Noto Sans'", 'system-ui', 'sans-serif'],
        body: ["'Noto Sans Hebrew'", "'Noto Sans Arabic'", "'Noto Sans'", 'system-ui', 'sans-serif'],
        label: ["'Noto Sans Hebrew'", "'Noto Sans Arabic'", "'Noto Sans'", 'system-ui', 'sans-serif'],
      },
      scale: {
        102: '1.02',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

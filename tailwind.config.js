/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Material-style token palette from design/DESIGN.md ("Candy — Playful & Vibrant")
        primary: '#e040a0',
        'on-primary': '#ffffff',
        'primary-container': '#f080c0',
        'on-primary-container': '#2e1a28',
        'primary-fixed': '#ffd6ee',
        'primary-fixed-dim': '#f0a0cc',
        'on-primary-fixed': '#3d0028',
        'on-primary-fixed-variant': '#a02070',
        'inverse-primary': '#f0a0cc',

        secondary: '#7c52aa',
        'on-secondary': '#ffffff',
        'secondary-container': '#eedcff',
        'on-secondary-container': '#2e2040',
        'secondary-fixed': '#eedcff',
        'secondary-fixed-dim': '#c8a8e8',
        'on-secondary-fixed': '#1a1030',
        'on-secondary-fixed-variant': '#4a3068',

        tertiary: '#0096cc',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#40c0ee',
        'on-tertiary-container': '#00334d',
        'tertiary-fixed': '#c8eaff',
        'tertiary-fixed-dim': '#80d0f0',
        'on-tertiary-fixed': '#001a33',
        'on-tertiary-fixed-variant': '#005580',

        error: '#e53e3e',
        'on-error': '#ffffff',
        'error-container': '#ffe8e8',
        'on-error-container': '#9b1c1c',

        background: '#fef7ff',
        'on-background': '#2e1a28',
        surface: '#fef7ff',
        'on-surface': '#2e1a28',
        'surface-variant': '#f2e8f2',
        'on-surface-variant': '#604868',
        'surface-tint': '#e040a0',
        'surface-dim': '#e0d6e0',
        'surface-bright': '#fef7ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fbf2fb',
        'surface-container': '#f8eef8',
        'surface-container-high': '#f2e8f2',
        'surface-container-highest': '#ece2ec',
        'inverse-surface': '#2e1a28',
        'inverse-on-surface': '#fef7ff',

        outline: '#907898',
        'outline-variant': '#dcc8e0',
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      fontFamily: {
        headline: ['Rubik', 'DM Sans', 'system-ui', 'sans-serif'],
        display: ['Rubik', 'DM Sans', 'system-ui', 'sans-serif'],
        body: ['Rubik', 'DM Sans', 'system-ui', 'sans-serif'],
        label: ['Rubik', 'DM Sans', 'system-ui', 'sans-serif'],
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

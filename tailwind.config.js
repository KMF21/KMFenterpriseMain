/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Bootstrap has been fully removed from the project, so Tailwind's own
  // base reset is safe to use as the site's single baseline.
  corePlugins: {},
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#10160C',
          panel: '#1A241A',
          panelLight: '#212D1C',
          gold: '#F7AB0A',
          goldDeep: '#B57D0A',
          paper: '#F7F5EF',
        },
      },
      fontFamily: {
        display: ['var(--kmf-font-display)', 'sans-serif'],
        sans: ['var(--kmf-font-body)', 'sans-serif'],
        mono: ['var(--kmf-font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
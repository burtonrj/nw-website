/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'purisa': ['Purisa', 'sans-serif'] // Add 'Purisa' to the fontFamily theme
      }
    },
  },
  plugins: [],
}


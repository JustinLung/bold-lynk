/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,css,svelte}'],
  theme: {
    extend: {
      colors: {
        'color-black': "#0D0D0E",
        'color-white': "#FFFFFF",
        'color-darkgrey': "#161616"
      }
    },
  },
  plugins: [],
}
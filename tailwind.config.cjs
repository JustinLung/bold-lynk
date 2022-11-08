/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,css,svelte}'],
  theme: {
    colors: {
      'color-black': "#0D0D0E",
      'color-white': "#FFFFFF",
      'color-darkgrey': "#161616",
      'transparent': "transparent",
      'color-red': 'red',
    },
    fontFamily: {
      futura: ["Futura", 'sans-serif'],
      quickSand: ["Quicksand", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

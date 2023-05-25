/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  important: true, // important in prod is must be
  plugins: [daisyui],
  daisyui: {
    themes: [
    ],
  },
  safelist: [
    {
      pattern: /bg-(red|green|blue|orange)-(600)/, // You can display all the colors that you need
    },
  ],
};

/** @type {import('tailwindcss').Config} */

// import themes from './src/themes/index.ts'
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  important: true, // important in prod is must be
  theme: ["dark"],
  // plugins: [require("daisyui")],
  plugins: [daisyui],
  daisyui: {
    themes: [
      // { ...themes }
    ],
  },
};

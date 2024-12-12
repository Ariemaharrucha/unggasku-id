/** @type {import('tailwindcss').Config} */

import prelinePlugin from "preline/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#f2f9f9",
          100: "#deedef",
          200: "#c0dce1",
          300: "#95c3cb",
          400: "#62a1ae",
          500: "#468594",
          600: "#3d6f7d",
          700: "#375b67",
          800: "#334d57",
          900: "#2e424b",
          950: "#1a2930",
        },
        secondary: {
          50: "#fffbeb",
          100: "#fff5c6",
          200: "#ffe988",
          300: "#ffd43a",
          400: "#ffc520",
          500: "#f9a307",
          600: "#dd7b02",
          700: "#b75606",
          800: "#94410c",
          900: "#7a370d",
          950: "#461b02",
        },
      },
    },
  },
  plugins: [prelinePlugin],
};

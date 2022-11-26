/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar1: "#40A36EDD",
        navbar2: "#A5C268DD",
        navbarOpen: "rgba(255,255,255,50%)",
      },
      backgroundImage: {
        feynmann: "url(./src/assets/Richard-Feynman-featured.jpeg)",
        wave1: "url(./scr/assets/SVG/wave_1.svg)",
      },
    },
  },
  plugins: [],
};

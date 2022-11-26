/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar1: "#40A36E",
        navbar2: "#A5C268",
        navbarOpen: "rgba(255,255,255,50%)",
        btngreen1: "#88E9AF",
        btngreen2: "#DDD370",
      },
      backgroundImage: {
        feynmann: "url(./src/assets/Richard-Feynman-featured.jpeg)",
        wave1: "url(./scr/assets/SVG/wave_1.svg)",
      },
    },
  },
  plugins: [],
};

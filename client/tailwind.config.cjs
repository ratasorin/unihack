/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar1: "#40A36EDD",
        navbar2: "#A5C268DD",
        'white-alpha-90': "rgba(255,255,255,90%)",
        'white-alpha-80': "rgba(255,255,255,80%)",
        'white-alpha-70': "rgba(255,255,255,70%)",
        'white-alpha-60': "rgba(255,255,255,60%)",
        'white-alpha-50': "rgba(255,255,255,50%)",
        'white-alpha-40': "rgba(255,255,255,40%)",
        'white-alpha-30': "rgba(255,255,255,30%)",
        'white-alpha-20': "rgba(255,255,255,20%)",
        'white-alpha-10': "rgba(255,255,255,10%)",
        'black-alpha-90': "rgba(0,0,0,90%)",
        'black-alpha-80': "rgba(0,0,0,80%)",
        'black-alpha-70': "rgba(0,0,0,70%)",
        'black-alpha-60': "rgba(0,0,0,60%)",
        'black-alpha-50': "rgba(0,0,0,50%)",
        'black-alpha-40': "rgba(0,0,0,40%)",
        'black-alpha-30': "rgba(0,0,0,30%)",
        'black-alpha-20': "rgba(0,0,0,20%)",
        'black-alpha-10': "rgba(0,0,0,10%)",
      },
      backgroundImage: {
        feynmann: "url(./src/assets/Richard-Feynman-featured.jpeg)",
        wave1: "url(./scr/assets/SVG/wave_1.svg)",
      },
    },
  },
  plugins: [],
};

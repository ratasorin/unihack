/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar1: '#40A36E',
        navbar2: '#A5C268',
        navbarOpen: 'rgba(255,255,255,50%)',
      },
    },
  },
  plugins: [],
}
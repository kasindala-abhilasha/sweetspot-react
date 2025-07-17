/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgba(224, 99, 99, 0.85)',
        accent1: 'rgba(224, 99, 216, 0.85)',
        accent2: 'rgba(220, 117, 186, 0.92)',
        accent3: 'rgba(215, 135, 157, 1)',
        accent4: 'rgba(219, 117, 128, 0.925)',
        textGray: 'rgba(79,79,79,0.7)',
        headingGray: 'rgba(79,79,79,0.66)',
      },
      fontFamily: {
        parastoo: ['Parastoo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

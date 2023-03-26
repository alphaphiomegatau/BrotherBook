/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "apo-blue": "#0033ab",
        "apo-gold": "#f7b512",
      }
    },
  },
  plugins: [],
}

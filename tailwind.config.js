/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        krishi: {
          DEFAULT: '#617A55', // Primary Sage Green
          dark: '#435334',    // Dark Sage Green
          light: '#E9EFEC',   // Soft Sage Background
        }
      }
    },
  },
  plugins: [],
}
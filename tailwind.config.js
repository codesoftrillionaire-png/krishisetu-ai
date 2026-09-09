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
          light: '#e6f4ea',
          DEFAULT: '#2e7d32',
          dark: '#1b5e20'
        }
      }
    },
  },
  plugins: [],
}
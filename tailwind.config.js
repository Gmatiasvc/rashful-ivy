/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This adds 'font-poppins' as a utility class
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
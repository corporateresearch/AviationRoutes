/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a192f', // Deep Navy Blue
          800: '#112240',
        },
        sky: {
          400: '#38bdf8', // Sky Blue
        },
        silver: {
          400: '#c0c0c0', // Metallic Silver
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

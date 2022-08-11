const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'special-grey': '#F5F0F0',
        ...defaultTheme.colors
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif' ],
    },
    
  },
  plugins: [],
}
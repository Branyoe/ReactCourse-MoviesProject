const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { //aqui puedes agregar tus propios colores
        'special-grey': '#F5F0F0', //por ejemlo este special-grey
        ...defaultTheme.colors
      },
    },
    fontFamily: { // aquí puedes importar tus fuentes
      'poppins': ['Poppins', 'sans-serif' ], //esta esta importada mediante cdn de google fonts public/index.html
    },
    
  },
  plugins: [],
}
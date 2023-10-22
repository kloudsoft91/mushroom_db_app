/** @type {import('tailwindcss').Config} */

// Required for larger mobile/tablet screens
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      'tablet': '481px',
      ...defaultTheme.screens,

      'laptop': '769px',
      // => @media (min-width: 769px) { ... }

      'desktop': '1025px',
      // => @media (min-width: 1025px) { ... }

      'ultra': '1280px',
      // => @media (min-width: 1280px) { ... } 
    },
    extend: {
      margin: {
        '5%': '5%',
      },
      width: {
        '90%': '90%'
      }
    },
  },
  plugins: [
    
  ]
  
}


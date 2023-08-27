/** @type {import('tailwindcss').Config} */

// Required for larger mobile/tablet screens
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
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
    extend: {},
  },
  plugins: [],
}


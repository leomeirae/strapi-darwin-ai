// @ts-check
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, './src/admin/**/*.{js,jsx,ts,tsx}'),
    join(__dirname, './src/plugins/**/*.{js,jsx,ts,tsx}'),
    join(__dirname, './src/extensions/**/*.{js,jsx,ts,tsx}')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    boxShadow: {
      '3xl': '0 0 10px 3px black'
    },
    gridTemplateRows: {
      '9': 'repeat(9, minmax(0, 1fr))',
      'layout': '200px minmax(900px, 1fr) 100px'}
  }},
  plugins: [],
}
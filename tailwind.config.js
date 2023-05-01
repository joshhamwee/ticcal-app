/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'greybg': '#f5f6f7',
        'lightblue': '#96d9fa',
        'orange': '#ec6236',
        'light-orange': '#f0815e'
      }
    },
  },
  plugins: [],
}

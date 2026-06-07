/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D2B1F',
        copper: '#9D836A',
        taupe: '#B5AC9D',
        accent: '#FDFDF1',
        'warm-sand': '#ECE6D6',
        'deep-taupe': '#938A7B',
        'near-black': '#1C1610',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Jost', 'sans-serif'],
        mono: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

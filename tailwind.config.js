/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#141210',
        'charcoal-deep': '#0D0B0A',
        gold: '#B89060',
        'gold-light': '#D4AF7A',
        'gold-pale': '#F0E8D4',
        ivory: '#F8F5F0',
        cream: '#F0EBE3',
        stone: '#E0D8CC',
        ink: '#1A1614',
        'ink-muted': '#6B6260',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'orb-1': 'orb1 9s ease-in-out infinite',
        'orb-2': 'orb2 12s ease-in-out infinite 1.5s',
        'scroll-line': 'scrollLine 2.2s ease-in-out infinite',
        'wa-pulse': 'waPulse 2.8s ease-out infinite',
      },
      keyframes: {
        orb1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -50px) scale(1.06)' },
          '66%': { transform: 'translate(-30px, 25px) scale(0.94)' },
        },
        orb2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-45px, 35px) scale(1.06)' },
          '66%': { transform: 'translate(28px, -30px) scale(0.94)' },
        },
        scrollLine: {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '50%': { transform: 'translateY(100%)', opacity: '0' },
          '51%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(100%)', opacity: '1' },
        },
        waPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.45)' },
          '70%': { boxShadow: '0 0 0 14px rgba(37,211,102,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          950: '#030905',
          900: '#06140B',
          850: '#0A1E11',
          800: '#0E2917',
          700: '#153D23',
          600: '#1D5330',
          500: '#266D40',
          emerald: '#10B981',
        },
        gold: {
          50: '#FAF8EE',
          100: '#F6F1D9',
          200: '#F0E2A8',
          300: '#E4CE71',
          400: '#DCBD44',
          500: '#D4AF37', // Imperial Gold
          600: '#B69225',
          700: '#8E7019',
          800: '#685112',
          900: '#43340D',
        },
        parchment: '#F6F3EC',
        ivory: '#FCFAF6',
        ink: '#0D1A0D',
        muted: '#8CA08E',
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'emerald-glow': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'luxury': '0 20px 50px -10px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}

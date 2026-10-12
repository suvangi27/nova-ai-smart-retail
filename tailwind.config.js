/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          ivory: '#F7F3EB',
          chocolate: '#4A3028',
          'chocolate-dark': '#35211B',
          'chocolate-light': '#63443A',
          gold: '#C5A46D',
          'gold-light': '#DFC8A2',
          'gold-dark': '#A6844D',
          beige: '#E9E0D2',
          'beige-dark': '#D4C8B5',
          'beige-light': '#F2ECE2',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(74, 48, 40, 0.08), 0 0 1px 1px rgba(197, 164, 109, 0.2)',
        'luxury-hover': '0 25px 50px -12px rgba(74, 48, 40, 0.16), 0 0 2px 1px rgba(197, 164, 109, 0.35)',
        'gold-glow': '0 0 25px rgba(197, 164, 109, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

// config for tailwindcss
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./main.jsx",
    "./src/**/*.{vue,js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        }
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        fadeOut: {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        },
        scaleIn: {
          '0%': {
            transform: 'scale(0)'
          }, 
          '100%': {
            transform: 'scale(1)'
          }
        },
        scaleOut: {
          '0%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(0)'
          }
        }
      },
      animation: {
        'bg-fadeIn': 'fadeIn 0.5s ease forwards',
        'bg-fadeOut': 'fadeOut 0.5s ease forwards',
        'modal-scaleIn': 'scaleIn 0.3s ease forwards',
        'modal-scaleOut': 'scaleOut 0.3s ease forwards',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#FFFBEA',
        yellow: {
          DEFAULT: '#FFD84D',
          pale: '#FFF1A8',
          soft: '#FFF1A8',
          gold: '#F4BD32',
          text: '#B97F00',
          hover: '#F4BD32',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#222222',
          muted: '#6B6451',
        },
        dark: {
          DEFAULT: '#111111',
          card: '#181818',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#8A8A9E',
        },
        muted: '#6B6451',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Playfair Display"', 'Georgia', 'serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      borderRadius: {
        card: '22px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(20, 17, 10, 0.04)',
        'card-hover': '0 12px 32px rgba(255, 201, 51, 0.22), 0 4px 12px rgba(20, 17, 10, 0.05)',
        'dark-hover': '0 12px 32px rgba(255, 201, 51, 0.16)',
        'glow-soft': '0 0 35px rgba(255, 201, 51, 0.3)',
      },
      animation: {
        'blob': 'blob 14s infinite alternate ease-in-out',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2.5s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(25px, -20px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
}


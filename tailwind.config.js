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
        theme: {
          bg: 'var(--bg-primary)',
          bgSubtle: 'var(--bg-secondary)',
          surface: 'var(--surface)',
          surfaceSubtle: 'var(--surface-secondary)',
          surfaceHover: 'var(--surface-hover)',
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          accent: 'var(--text-accent)',
          border: 'var(--border)',
          borderSubtle: 'var(--border-subtle)',
          accentBg: 'var(--accent-bg)',
          accentBorder: 'var(--accent-border)',
        },
        brand: {
          black: '#050505',
          blackSoft: '#111111',
          blackSurface: '#181818',
          blackBorder: '#292929',
          yellow: '#FFF04A',
          yellowBright: '#FFFF66',
          yellowSoft: '#FFF7A8',
          yellowLight: '#FFFCE1',
          gold: '#FFF04A',
          goldHover: '#FFFF66',
          goldLight: '#FFF7A8',
          goldGlow: 'rgba(255, 240, 74, 0.25)',
        },
        darkBg: '#050505',
        darkCard: '#181818',
        darkCardBorder: '#292929',
        lightBg: '#FFF04A',
        lightCard: '#FFF7A8',
        lightCardBorder: '#050505',
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Outfit', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(circle at 50% 50%, rgba(255, 240, 74, 0.08) 0%, transparent 65%)',
        'gold-gradient': 'linear-gradient(135deg, #FFFF66 0%, #FFF04A 50%, #FFF7A8 100%)',
        'navy-gradient': 'linear-gradient(135deg, #181818 0%, #050505 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0F172A', // Slate 900
          text: '#38BDF8', // Sky 400
          dim: '#94A3B8', // Slate 400
          green: '#22C55E', // Green 500
          yellow: '#EAB308', // Yellow 500
          red: '#EF4444', // Red 500
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], // Suggest Fira Code if available, fallback to monospace
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
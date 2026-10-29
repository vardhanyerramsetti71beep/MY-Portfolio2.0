/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cinema: {
          bg: "#05070e",
          card: "#0b1021",
          cardHover: "#121936",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(14, 165, 233, 0.4)",
          gold: "#f59e0b",
          cyan: "#00f0ff",
          blue: "#0284c7",
          purple: "#9333ea"
        }
      },
      fontFamily: {
        sans: ['"Outfit"', '"Inter"', 'sans-serif'],
        display: ['"Space Grotesk"', '"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-spin': 'glowSpin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'beam': 'beam 8s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite'
      },
      keyframes: {
        glowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      },
      backgroundImage: {
        'cinema-gradient': 'radial-gradient(ellipse at 50% -20%, rgba(14, 165, 233, 0.25) 0%, rgba(5, 7, 14, 0) 70%)',
        'v-glow': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.3) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 80%)'
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366F1',  // Indigo 500
          dark: '#4F46E5',   // Indigo 600
        },
        accent: {
          light: '#FBBF24',  // Amber 400
          dark: '#F59E0B',   // Amber 500
        },
        background: {
          light: '#FFFFFF',
          dark: '#0F172A',   // Slate 900
        },
        surface: {
          light: '#F8FAFC',  // Gray 50
          dark: '#1E293B',   // Slate 800
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        glitch: 'glitch 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideInLeft: {
          from: { opacity: 0, transform: 'translateX(-30px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: 0, transform: 'translateX(30px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(45deg) rotateZ(45deg)' },
          '50%': { transform: 'translateY(-20px) rotateX(45deg) rotateZ(45deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translateX(0)', opacity: 0.3 },
          '50%': { transform: 'translateX(10px)', opacity: 0.6 },
        },
      },
    },
  },
  plugins: [],
}

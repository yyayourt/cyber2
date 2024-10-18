/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#9d00ff',
        'neon-red': '#ff0055',
      },
      backgroundImage: {
        'circuit-pattern': "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e0654b',
        charcoal: '#111111',
        charcoalLight: '#181818',
        accentYellow: '#ffeb3b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-yellow': '0 0 20px rgba(255, 235, 59, 0.4)',
        'glow-coral': '0 0 40px rgba(224, 101, 75, 0.3)',
      }
    },
  },
  plugins: [],
}

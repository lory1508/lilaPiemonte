/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  safelist: [
    'bg-paleRed',
    'bg-brickRed',
    'bg-softWarmRed',
    'bg-deepMaroon',
    'bg-lightRed',
    'bg-crimson',
    'bg-customRed',
    'text-paleRed',
    'text-brickRed',
    'text-softWarmRed',
    'text-deepMaroon',
    'text-lightRed',
    'text-crimson',
    'text-customRed',
  ],
  theme: {
    extend: {
      colors: {
        paleRed: '#FFE5E5',
        brickRed: '#A60000',
        softWarmRed: '#F44336',
        deepMaroon: '#8B0000',
        lightRed: '#FF6F61',
        crimson: '#B71C1C',
        customRed: '#E53935',
      },
    },
  },
  plugins: [],
}

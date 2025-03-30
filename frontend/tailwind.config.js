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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          50: '#f0f5ff',
          100: '#e0eafc',
          800: '#1e429f',
          900: '#192b6a',
        },
      },
    },
  },
  plugins: [],
}

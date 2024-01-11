/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4DAB6E',
        secondary: {
          100: '#4DAB6E',
          200: '#888883'
        },
        success: {
          200: '#ACF5C9',
          300: '#83F0AE',
          400: '#59EA93',
          700: '#0E7537'
        },
        danger: {
          200: '#F5CCD3',
          500: '#E37285',
          600: '#D42A46',
          700: '#B0233A'
        },
        warning: {
          200: '#F7E4BE',
          300: '#F4D79D',
          400: '#F0C97D',
          500: '#EAB54C',
          700: '#A37313'
        }
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


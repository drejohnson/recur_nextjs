const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    fontFamily: {
      'sans': [
        'Montserrat',
        ...defaultTheme.fontFamily.sans,
      ],
      'display': ['Oswald', 'sans-serif'],
      'heading': ['Oswald', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}

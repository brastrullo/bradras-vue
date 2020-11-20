module.exports = {
  purge: ['./public/**/*.html', './src/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      pointerEvents: ['disabled', 'hover', 'focus'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};

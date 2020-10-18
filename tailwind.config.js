module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  // purge: { //ENABLE TO TEST LOCALLY
  //   enabled: true,
  //   content: ['./public/**/*.html', './src/**/*.html', './src/**/*.vue',],
  // },
  purge: ['./public/**/*.html', './src/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};

module.exports = (api, options) => {
  api.extendPackage({
    devDependencies: {
      'postcss-px-to-viewport': '^0.0.3'
    },
    postcss: {
      plugins: {
        'postcss-px-to-viewport': {
          viewportWidth: 375,
          viewportHeight: 667,
          unitPrecision: 5,
          viewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false
        }
      }
    }
  })
}
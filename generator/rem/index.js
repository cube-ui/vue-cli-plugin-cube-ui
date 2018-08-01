module.exports = (api, options) => {
  api.extendPackage({
    devDependencies: {
      'postcss-px2rem': '^0.3.0'
    }
  })
  api.extendPackage({
    postcss: {
      plugins: {
        'postcss-px2rem': {
          remUnit: 37.5
        }
      }
    }
  })
  if (options.amfeFlexible) {
    api.extendPackage({
      dependencies: {
        'amfe-flexible': '^2.2.1'
      }
    })
    api.injectImports(api.entryFile, `import 'amfe-flexible'`)
  }
}
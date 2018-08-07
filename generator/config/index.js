module.exports = (api, options) => {
  api.extendPackage({
    vue: {
      css: {
        loaderOptions: {
          stylus: {
            'resolve url': true,
            import: options.theme ? ['./src/theme'] : []
          }
        }
      },
      pluginOptions: {
        'cube-ui': {
          postCompile: !!options.postCompile,
          theme: !!options.theme
        }
      }
    }
  })
}

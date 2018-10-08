const PostCompilePlugin = require('webpack-post-compile-plugin')
const TransformModulesPlugin = require('webpack-transform-modules-plugin')

module.exports = (api, projectOptions) => {
  // handle stylus options import path
  const imports = projectOptions.css.loaderOptions.stylus.import
  imports.forEach((path, index) => {
    imports[index] = api.resolve(path)
  })
  const cubeUIOpts = projectOptions.pluginOptions && projectOptions.pluginOptions['cube-ui'] || {
    postCompile: true
  }
  if (cubeUIOpts.postCompile) {
    // post compile
    api.chainWebpack(config => {
      const conf = config.toConfig()
      config
        .plugin('post-compile')
        .use(PostCompilePlugin)
    })
  } else {
    api.chainWebpack(config => {
      config
        .resolve
        .alias
        .set('cube-ui', 'cube-ui/lib')
    })
  }
  // transfrom modules
  api.chainWebpack(config => {
    config
      .plugin('transform-modules')
      .use(TransformModulesPlugin)
  })
}
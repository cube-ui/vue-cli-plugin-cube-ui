<%_ if (theme) { _%>
const path = require('path')
<%_ } _%>
module.exports = {
  baseUrl: '/',
  productionSourceMap: false,
  css: {
    extract: true,
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: <%- theme ? `[path.resolve(__dirname, './src/theme')]` : `[]` %>
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      <%_ if (postCompile) { _%>
      postCompile: true<%_ if (theme) { _%>,
      theme: true<%_ } _%>

      <%_ } _%>
    }
  }
}

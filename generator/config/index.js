module.exports = (api, options) => {
  api.render('./template', {
    postCompile: options.postCompile,
    theme: options.theme
  })
}
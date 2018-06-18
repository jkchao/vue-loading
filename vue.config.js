module.exports = {
  assetsDir: './',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('raw-loader')
        .loader('raw-loader')
  },

  css: {
    extract: false
  }
}
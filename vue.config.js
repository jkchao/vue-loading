module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-loading/'
    : '/',
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
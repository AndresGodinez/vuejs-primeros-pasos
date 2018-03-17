module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg')
      .use('file-loader')
      .loader('url-loader')
      .tap(options => {
        return {
          name: 'img/[name].[hash:8].[ext]',
          limit: 10000
        }
      })
  }
}

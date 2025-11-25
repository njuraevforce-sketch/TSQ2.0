const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  
  configureWebpack: {
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
    }
  },
  
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Finance App'
      return args
    })
  }
})

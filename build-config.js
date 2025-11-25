const { build } = require('@dcloudio/uni-cli');

module.exports = {
  outputDir: 'dist',
  publicPath: './',
  configureWebpack: {
    plugins: []
  },
  chainWebpack(config) {
    config.output.filename('js/[name].js');
    config.output.chunkFilename('js/[name].js');
  }
};

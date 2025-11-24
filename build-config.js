const { build } = require('@dcloudio/uni-cli');

module.exports = {
  // Cloudflare Pages ожидает сборку в папку 'dist'
  outputDir: 'dist',
  // Базовый путь для роутинга
  publicPath: './',
  configureWebpack: {
    plugins: []
  }
};

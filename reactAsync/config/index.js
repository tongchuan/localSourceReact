const path = require('path')

module.exports = {
  build: {
    env: '"production"',
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
  },
  dev: {
    env: '"development"',
    port: 3008,
    autoOpenBrowser: true,
    assetsPublicPath:'/',
    assetsSubDirectory:'static'
  }
}
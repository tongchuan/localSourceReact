module.exports = {
  dev: {
    host: 'http://127.0.0.1',
    port: '3008',
    path: 'dist',
    publicPath: './',
    serverHost : "/static/"
  },
  build: {
    path: 'dist/',
    publicPath: './',
    serverHost : "https://ybz.yonyoucloud.com"
  },
  build238: {
    path: 'dist/metadb/',
    publicPath: './',
    serverHost : "http://10.3.14.238/"
  }
}
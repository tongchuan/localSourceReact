let path = require('path')
let opn = require('opn')
let express = require('express')
let webpack = require('webpack')
let config = require('../config')
let webpackConfig = require('./webpack.dev.conf')

let port = process.env.PORT || config.dev.port
let autoOpenBrowser = !!config.dev.autoOpenBrowser

let app = express()
let compiler = webpack(webpackConfig)
let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})
let hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
  // log: false,
  // noInfo:true
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.use(devMiddleware)

app.use(hotMiddleware)

let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})


let server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}


var express = require('express');
var compression = require('compression');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
var path = require('path')
var port = 3011;

var proxy = require('http-proxy-middleware')

const compiler = webpack(webpackConfig);

app.use(compression());

app.use(webpackDevMiddleware(compiler, {
  historyApiFallback: true,
  noInfo: true,
  // filename: webpackConfig.output.filename,
  publicPath: webpackConfig.output.publicPath,
  headers: { "X-Custom-Header": "yes" },
  stats: {
    colors: true
  }
}));
// console.log(compiler)
app.use(webpackHotMiddleware(compiler));
app.use('/build/', express.static(__dirname + '/build/'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/app.html'))
})

app.listen(port, function(err){
  if (err) {
    console.log('err : ', err)
  } else {
    console.log(`http://localhost:${port}`)
  }
})

let webpack = require('webpack')
let config = require('../config')
let merge = require('webpack-merge')
let baseWebpackConfig = require('./webpack.base.conf')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
Object.keys(baseWebpackConfig.entry).forEach((name) => {
  baseWebpackConfig.entry[name] = baseWebpackConfig.entry[name].concat('webpack-hot-middleware/client?noInfo=true&reload=true')
})
module.exports = merge(baseWebpackConfig, {
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style/[name].css',
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      cache: true,
      sourceMap:true,
      beautify:true,
      comments:true
    }),
    new webpack.ProvidePlugin({
    })
  ]
})
let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin 		= 	require('extract-text-webpack-plugin');
let config = require('../config')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
process.env.NODE_ENV = config.dev.env

module.exports = {
  entry: {
    index: ['babel-polyfill','./src/main']
    // index: ['./src/main']
  },
  output: {
    filename: 'js/[name]-[hash].js',
    path: resolve('dist'),
    publicPath: config.dev.assetsPublicPath,
    chunkFilename: 'js/[name]-[hash].js',
  },
  resolve: {
    extensions: ['.js','.jsx','.css','.less','.scss'],
    modules: [
      resolve('node_modules'),
      resolve('src')
    ],
    alias: {
      '@': resolve('src')
    }
    // modules: [resolve(__dirname,'node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [resolve('src'), resolve('test')]
        // query: {
        //   presets: ['es2015',  'react']
        // }
      },
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
      },{
          test: /\.(png|jpg|gif|md)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name:'[name]-[hash].[ext]',
                publicPath:'',
                outputPath: './images/'
              }
            }
          ]
      },{
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'[name]-[hash].[ext]',
              publicPath:'',
              outputPath: './fonts/'
            }
          }
        ]
      }
    ]
  }
}
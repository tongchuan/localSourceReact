/**
 * @file The file of build for develop/production
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/26
 */

import webpack from 'webpack';
import path from 'path';
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tplSourcePath = path.join(__dirname, './template');
const tplTargetPath = path.join(__dirname, './output/');

const webpackConfig = {
    entry: {
        index: [
            path.join(__dirname, 'src/index'),
            'webpack-dev-server/client?http://localhost:8089/',
            'webpack/hot/only-dev-server'
        ]
    },
    output: {
        path: path.join(__dirname, 'output'),
        filename: 'app_[hash:8].js',
        // publicPath: '/assets/'
    },
    //devtool: 'inline-source-map',//inline-source-map
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
      }),
      new HtmlWebpackPlugin({
          // inject: true,
          //cdn: CDN,
          template: tplSourcePath + '/index.html',
          filename: tplTargetPath + '/index.html',
          chunks: ['index']
      }),
      new FriendlyErrorsWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: [/node_modules/]
            }
        ]
    },
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            //'preact-compat': 'preact-compat/dist/preact-compat'
        }
    },
    devServer: {
        contentBase: tplSourcePath,//__dirname + './',
        publicPath: __dirname + '/assets/',
        host: "localhost",
        port: 8089,
        historyApiFallback: true,
        hot: true,
        quiet: true,
        inline: true,
        open:true,
        progress: true,
        compress: false,
        proxy: {
          //"**": "http://localhost:8089/output/"
        },
        // setup: function (app) {
        //   console.log("app:",app);
        // }
    }
}

module.exports = webpackConfig;

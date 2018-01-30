let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin 		= 	require('extract-text-webpack-plugin');
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let Config =  require('./config')
const nodeEnv = process.env.NODE_ENV || 'development';
const Service = Config[process.env.server || 'dev']

let isPro = nodeEnv === 'production';
if(isPro){
  console.log('发布版本：'+process.env.server)
}else{
  console.log('开发版本：'+process.env.server || 'dev')
}
let plugins = []
if(isPro){
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      },
      comments: false
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/assets/favicon.png'),
        to: path.join(__dirname, Service.path)
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'dll/vendor.dll.js'),
        to: path.join(__dirname, Service.path)
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'static'),
        to: path.join(__dirname, Service.path+'static')
      }
    ]),
    new CleanWebpackPlugin([Service.path],{
      root: __dirname,
      verbose: true,
      dry: false
    })
  )
}else{
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      cache: true,
      sourceMap:true,
      beautify:true,
      comments:true
    })
  )
}
plugins.push(
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
      'process.env':{
          'NODE_ENV': JSON.stringify(nodeEnv),
          'SERVER': JSON.stringify(Service.serverHost)
      }
  }),
  new ExtractTextPlugin("[name]-[hash].css"),
  new HtmlWebpackPlugin({
    title:"index-张彤川",
    template:"./index.html",
    // chunks:['index'],
    filename:'index.html',
    minify:{
      removeComments:true,//移除HTML中的注释
      collapseWhitespace:true //删除空白符与换行符
    }
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
  }),
  new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, 'dll', 'manifest.json'))
  })
)
// plugins.push(new webpack.optimize.CommonsChunkPlugin({
//   name: "lib",x
//   filename: "js/commons.js",
// }))
let index = []
index.push('babel-polyfill','./src/index')
if(!isPro){
  index.push('webpack-hot-middleware/client?reload=true','webpack/hot/only-dev-server')
}
module.exports = {
  devtool: isPro ? '#source-map' : '#cheap-module-eval-source-map',
  entry: {
    index:index
  },
  output: {
    filename: 'js/[name]-[hash].js',
    path: path.join(__dirname, Service.path),
    publicPath: Service.publicPath,
    chunkFilename: 'js/[name]-[hash].js',
  },
  plugins,
  resolve: {
    extensions: ['.js','.jsx','.css','.less','.scss'],
    modules: [
      path.resolve(__dirname,'node_modules'),
      path.resolve(__dirname,'./src'),
      path.resolve(__dirname,'./dll/ueditor')
    ],
    alias: {
      '@': path.resolve(__dirname,'./src'),
      '$': path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
      'jquery' : path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
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

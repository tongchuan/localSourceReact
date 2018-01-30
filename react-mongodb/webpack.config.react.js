const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin 		= 	require('extract-text-webpack-plugin');//提取css单独文件
const TransferWebpackPlugin 	= 	require('transfer-webpack-plugin');//把指定文件夹下的文件复制到指定的目录
const autoprefixer 			= 	require('autoprefixer');
const path = require('path');
module.exports = {
  devtool: 'source-map',
  entry:{
    main:"./react/index.js"
  },
  output:{
    filename: 'js/[name].js',
    // filename: 'js/[name]-[hash].js',
    path: path.join(__dirname, 'dist'),
  },
  resolve:{
    extensions: ['.js','css','less','scss','.json']
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin('common'),//提取页面公共部分
    new ExtractTextPlugin("css/[name].css"),
    // new ExtractTextPlugin("css/[name]-[hash].css"),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE.ENV':"development"
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title:"REACT-张彤川",
      template:"./react/index.html"
    }),
    new webpack.LoaderOptionsPlugin({
      options:{
        devServer: {
      		port: 3001,
      		contentBase:'./dist',
      		historyApiFallback: true,
      		hot: true,
      		inline: true,
      		progress: true
      	},
        postcss: function () {
          return [precss, autoprefixer];
        }
      }
    })
  ],
  module:{

    loaders:[
      {
          test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
          exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
          // loader: 'babel-loader'//loader的名称（必须）
          // loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
          loader: 'babel-loader',
          query: {
            presets: [ 'es2015', 'react', 'stage-0' ]
          }
      },

      {
        test: /\.css$/,loader:ExtractTextPlugin.extract({
        fallback:"style-loader",
        // loader:"css-loader"})
        use:"css-loader!postcss-loader"})
      },
			{
        test: /\.less$/,
        exclude:/node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback:"style-loader",
          // loader:"css-loader!less-loader"})
          use:"css-loader!postcss-loader!less-loader"})
      },
			{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:"css-loader!postcss-loader!sass-loader"})
          // loader:"css-loader!sass-loader"})
      },
			{test: /\.(jpg|png)$/, loader: "url?limit=8192"},
			{test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,loader: 'file'},
			{test: /\.json$/,loader: 'json'},
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader?importLoaders=1',
      //     'postcss-loader'
      //   ]
      // }
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: 'eslint-loader'
  //     }
    ],

  },

  // postcss: [autoprefixer({browsers:["last 2 version","ie 8","firefox 20","chrome 33","opera 21","safari 8","ios_saf 10","edge 14"]})],

  // eslint:{
  //   configFile: './.eslintrc'
  // }
}

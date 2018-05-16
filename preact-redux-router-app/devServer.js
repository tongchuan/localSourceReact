/**
 * @file The devServer for develop/production
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/21
 */

import webpack from 'webpack';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

const HOST = 'localhost';
const PORT = 8089;

const server = new WebpackDevServer(webpack(config), {
    contentBase: path.join(__dirname, 'template'),
    publicPath: config.output.publicPath,
    //hot: true,
    open: true,
    quiet: true,
    inline:true,
    compress: true,
    historyApiFallback: true,
    stats: {
        chunks: false,
        colors: true
    }
});

server.listen(PORT, HOST, (err) => {
    if (err) console.log(`Error: ${err}`);
    else console.log(`Server is running on ${HOST}:${PORT}`);
});

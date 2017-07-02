const webpack = require('webpack');
const path = require('path');
const debug = process.env.NODE_ENV !== 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./src/css/main.css');

module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: debug ? 'inline-sourcemap' : false,
    entry: './js/client.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2016', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {
                test: /\.(sass|scss)$/,
                loader: debug ? 'css-loader!sass-loader' : extractCSS.extract('css-loader!sass-loader')
            }
        ]
    },
    output: {
        path: __dirname + '/src/',
        filename: 'client.min.js'
    },
    plugins: debug ? [] : [
        new extractCSS({
            filename: 'main.min.css',
            allChunks: true,
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
  ],
};

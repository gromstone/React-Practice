var webpack = require('webpack');
var path = require('path');
var debug = process.env.NODE_ENV !== 'production';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                test: /\.scss$/,
                loader: debug ? 'css-loader!sass-loader' : ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    output: {
        path: __dirname + '/src/',
        filename: 'client.min.js'
    },
    plugins: debug ? [] : [
        new ExtractTextPlugin('/css/main.css', {
            allChunks: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
  ],
};

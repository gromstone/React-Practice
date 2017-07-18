const path = require('path');
const glob = require('glob')

const HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    parts = require('./webpack.parts.js');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
};

const mainConfig = merge([
    {
        entry: { 
            app: PATHS.app,
        },
        output :{
            path: PATHS.build,
            filename: 'js/[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack demo',
            }),
        ],
    },
    parts.loadJSX({ include: PATHS.app, exclude: /(node_modules|bower_components)/ }),
    parts.lintJS({ include: PATHS.app }),
]);

const prodConfig = merge([
    parts.extractCSS({
        use: ['css-loader', parts.autoprefix(),'sass-loader']
    }),
    parts.purifyCSS({
        paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
    }),
]);

const devConfig = merge([
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT,
    }),
    parts.loadSCSS(),
]);


module.exports = (env) => {
    console.log('env ', env);
    
    if (env === 'prod'){
        return merge(mainConfig, prodConfig);
    }
    return merge(mainConfig, devConfig);
};
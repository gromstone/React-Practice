const ExtractTextPlugin = require('extract-text-webpack-plugin'),
    PurifyCSSPlugin = require('purifycss-webpack');

exports.devServer = ({host, port} = {}) => ({
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        overlay: {
            errors: true,
            warnings: true,
        }
    },    
});

exports.purifyCSS = ({paths}) => ({
    plugins : [
        new PurifyCSSPlugin({ paths })
    ],
})

exports.autoprefix = () => ({
    loader: 'postcss-loader',
    options: {
        plugins: () => ([
            require('autoprefixer')(),
        ]),
    },
});

exports.loadSCSS = ({ include, exclude } = {}) => ({
    module: {
        rules: [{
            test: /\.scss$/,
            include,
            exclude,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },], 
    },
});

exports.extractCSS = ({include, exclude, use}) => {
    const plugin = new ExtractTextPlugin({
        filename: 'css/[name].css',
    });
    return {
        module: {
            rules: [{
                test: /\.scss$/,
                include,
                exclude,
                use: plugin.extract({
                    use,
                    fallback: 'style-loader',
                }),
            },]
        },
        plugins: [plugin],
    };
};

exports.loadJSX = ({ include, exclude } = {}) => ({
    module: {
        rules: [{
            test: /\.jsx?$/,
            include,
            exclude,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2016', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
            },
        },], 
    },
});

exports.lintJS = ({include, exclude, options}) => ({
    module:{
        rules: [{
            test: '/\.js$/',
            include,
            exclude,
            enforce: 'pre',
            loader: 'eslint-loader',
            options,
        },],
    },  
});
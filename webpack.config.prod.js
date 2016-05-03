var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        'app': './app/app.ts',
        'vendor': './app/vendor.ts'
    },
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new HtmlWebpackPlugin({
            inject: false,
            template: './app/index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyWebpackPlugin([
            {
                from: 'app/app.html'
            },
            {
                from: 'app/favicon.ico'
            },
            {
                from: 'app/static',
                to: 'static'
            },
            {
                context: 'app',
                from: '**/partials/*.html'
            }
        ])
    ],

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ],
        noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
    },

    devServer: {
        historyApiFallback: true
    }
};

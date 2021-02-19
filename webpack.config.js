const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    name: "portfolio setting",
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    entry: {
        app: ['./frontend/static/js/index'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['> 5% in KR', 'last 2 chrome versions', 'ie > 9']
                            },
                            debug: true
                        }], 
                    ],
                    plugins : [
                        // ['react-refresh/babel'],
                        ['@babel/plugin-proposal-class-properties'],
                        ["@babel/plugin-transform-runtime",
                            {
                                corejs: 3
                            }
                        ]
                    ]
                }
            },
    ],
    },
    plugins: [
        // new RefreshWebpackPlugin(),
    ],
    output: {
        path: path.join(__dirname, 'frontend', 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/frontend/',
        environment: {
            arrowFunction: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false,
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'frontend'),
        publicPath: '/dist/',
        hot: true,
        historyApiFallback : {
            index: '/frontend/index.html/'
        }
    },
};
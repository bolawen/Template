const Path = require('path');
const Webpack = require('webpack');
const ENV = require('./utils/env');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    cache: {
        type: 'filesystem',
    },
    entry: Path.resolve(process.cwd(), './src/index.ts'),
    output: {
        path: Path.resolve(process.cwd(), 'build'),
        filename: 'js/index.js',
    },
    resolve: {
        alias: {
            '@': Path.resolve(process.cwd(), './src'),
            "js": Path.resolve(process.cwd(), './src/assets/js'),
            "api": Path.resolve(process.cwd(), './src/api'),
            "css": Path.resolve(process.cwd(), './src/assets/css'),
            "scss": Path.resolve(process.cwd(), './src/assets/scss'),
            "utils": Path.resolve(process.cwd(), './src/utils'),
            "images": Path.resolve(process.cwd(), './src/assets/images'),
        },
        extensions: ['.vue', '.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'images/[name]-[hash][ext]',
                },
            },
            {
                test: /\.(eot|svg|ttf|woff2?|)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]-[hash][ext]',
                },
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: Path.resolve(process.cwd(), './public/index.html'),
            filename: 'index.html',
            title: 'Webpack-Vue3-TypeScript',
        }),
        new CleanWebpackPlugin(),
        new Webpack.DefinePlugin({
            'process.env': {
                ...ENV,
            },
        }),
        new FriendlyErrorsWebpackPlugin(),
        new ESLintPlugin({ extensions: ['js', 'ts', 'vue'] }),
    ],
};

const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    mode: 'development',
    entry: join(__dirname, 'src', 'app.js'),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    // devServer: {
    //     port: 1000,
    //     hot: true,
    //     open: true,
    //     historyApiFallback: true
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ],
                    plugins : [
                        '@babel/plugin-proposal-export-default-from'
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title:'eCom Assortment Inspector',
            showErrors: true,
            cache: true,
            template: join(__dirname, 'index.html')
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: join(__dirname, 'build'),
        publicPath: '/'
    }
}

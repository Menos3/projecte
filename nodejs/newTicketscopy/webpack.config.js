const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
var webpack = require('webpack')

module.exports = {
    mode: 'development',

    output: {
        clean: true
    },
    module: {
        rules: [{
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                        // minimize: true,
                }
            }, {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }, {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                },
            }


        ],
    },
    experiments: {
        topLevelAwait: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
            }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [{ from: "src/assets", to: "./assets" }, ],
        }),
    ]
}
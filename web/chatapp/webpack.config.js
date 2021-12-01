const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    mode: 'development',
    output: {
        clean: true
    },
    module: {
        
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'nou-estil.css',
            ignoreOrder: false
        }),
    ]
}
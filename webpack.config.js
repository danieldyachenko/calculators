const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.tsx',
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx",  ".js"]
    },
    devServer: {
        contentBase: './dist',
    },
    /*plugins: [
        new HtmlWebpackPlugin({
            title: 'Calculators',
        }),
    ],*/
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
};
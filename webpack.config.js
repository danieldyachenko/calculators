const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // mode: "development",
    entry: {
        index: './src/index.tsx',
        areaTriangle: './src/components/AreaTriangle/AreaTriangle.tsx',
        commonFactor: './src/components/CommonFactor/CommonFactor.tsx'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx",  ".js"]
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
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
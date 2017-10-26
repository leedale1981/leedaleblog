var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './scripts/app.tsx',
        './styles/app.less'
    ],
    output: {
        path: path.resolve('./build', 'dist'),
        filename: 'app.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, use: { loader: "ts-loader" } },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { sourceMap: true } },
                    { loader: "less-loader", options: { sourceMap: true } }
                ]
            },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: { loader: "file-loader" } },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: { loader: "file-loader" } },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: { loader: "file-loader" } },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: { loader: "file-loader" } }
        ]
    }
};
const path = require('path');
const webpack = require('webpack');
const SPSaveWebpackPlugin = require('spave-webpack-plugin');
const creds = require("./settings.js");

const siteUrl = "https://sadacloud.sharepoint.com/sites/rajesh";
const spJSPath = "Style%20Library/rajesh/js";
const spCSSPath = "Style%20Library/rajesh/CSS";

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: './dist/js',
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new SPSaveWebpackPlugin({
            "coreOptions": {
                "checkin": true,
                "checkinType": 1,
                "siteUrl": siteUrl
            },
            "credentialOptions": creds,
            "fileOptions": {
                "folder": spJSPath
            }
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
        }],
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'latest']
            }
        }]
    }
};
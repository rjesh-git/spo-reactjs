const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist/js',
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ],
    loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            }
        ]
  }
};
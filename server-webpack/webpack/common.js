/* eslint-disable */

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, '..', 'src/app.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [
            "@babel/preset-env",
          ],
          plugins: [],
        }
      },
    ]
  },
  resolve: {
    alias: {
      Root: resolve(__dirname, '..' ,'src'),
    },
    extensions: ['.js'],
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
};

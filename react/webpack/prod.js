/* eslint-disable */

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const { resolve } = require('path');
const webpack = require('webpack');
const babelConfig = require('./babel.config.json');
const config = require('../src/config.js');

module.exports = {
  mode: 'production',
  entry: resolve(__dirname, '..', 'src/app.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'build/static/js')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: babelConfig.presets,
          plugins: babelConfig.plugins
        }
      }, {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer];
              }
            }
          },
          'less-loader'
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg)$/,
        use: [
          'url-loader'
        ]
      }, {
        test: /\.(less|js)$/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              search: '\@@CDN@@',
              replace: config.prodCDN,
              flags: 'g'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Root: resolve(__dirname, '..', 'src'),
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      cache: true
    })
  ]
};

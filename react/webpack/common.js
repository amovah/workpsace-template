/* eslint-disable */

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const { resolve } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require('../src/config.js');

const devMode = process.env.NODE_ENV !== 'production';

  module.exports = {
  entry: resolve(__dirname, '..', 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          plugins: [],
        }
      }, {
        test: /\.(css|less)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
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
              search: '@@CDN@@',
              replace: config.cdn,
              flags: 'g'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Root: resolve(__dirname, '..' ,'src'),
    },
    extensions: ['.js', '.jsx'],
  },
  target: 'web',
};

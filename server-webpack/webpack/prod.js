/* eslint-disable */

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const common = require('./common.js');

module.exports = Object.assign({}, common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new UglifyJsPlugin({
      cache: true,
    }),
  ]
});

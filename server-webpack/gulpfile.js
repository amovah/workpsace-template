/* eslint-disable */

const gulp = require('gulp');
const webpack = require('webpack');
const del = require('del');

gulp.task('webpack', cb => {
  webpack(require('./webpack/dev.js'), (err, stat) => {
    console.log(stat);
    cb();
  })
});

gulp.task('del', cb =>
  del([
    'build'
  ], cb())
);

/* eslint-disable */

const gulp = require('gulp');
const webpack = require('webpack');
const del = require('del');

gulp.task('dev:webpack', ['del'], cb => {
  webpack(require('./webpack/dev.js'), (err, stats) => {
    if (err) {
      throw new Error('webpack build failed', err);
    }

    console.log(stats.toString({
      assets: true,
      colors: true
    }));
  });
});

gulp.task('prod:webpack', ['del'], cb => {
  webpack(require('./webpack/prod.js'), (err, stats) => {
    if (err) {
      throw new Error('webpack build failed', err);
    }

    console.log(stats.toString({
      assets: true,
      colors: true
    }));
    cb();
  });
});

gulp.task('del', cb =>
  del([
    'build'
  ], cb)
);

gulp.task('dev', ['del', 'dev:webpack']);
gulp.task('prod', ['del', 'prod:webpack']);
gulp.task('default', ['dev']);

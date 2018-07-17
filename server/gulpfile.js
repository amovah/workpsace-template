/* eslint-disable */

const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const del = require('del');

gulp.task('babel', () =>
  gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('build/'))
);

gulp.task('del', cb =>
  del([
    'build'
  ], cb())
);

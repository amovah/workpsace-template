/* eslint-disable */

const gulp = require('gulp');
const lint = require('gulp-eslint');

gulp.task('lint', () =>
  gulp.src('./**/*.js')
  .pipe(lint())
  .pipe(lint.format())
);

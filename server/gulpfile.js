/* eslint-disable */

const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const del = require('del');

gulp.task('babel', ['del'], () =>
  gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('build/'))
);

gulp.task('del', cb => {
  del([
    'build/**'
  ], cb())
});

gulp.task('lint', () =>
  gulp.src('src/**/*.js')
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError())
);

gulp.task('dev', ['del', 'babel'], () => {
  gulp.watch('src/**/*.js', ['del', 'babel']);
});

gulp.task('prod', ['lint', 'del', 'babel']);

/* eslint-disable */

const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const del = require('del');

gulp.task('del', (cb) => {
  del([
    'build/**'
  ], cb())
});

gulp.task('babel', (cb) => {
  gulp.src('src/**/*.js')
  .pipe(babel({
    presets: [
      "@babel/preset-env",
    ],
    plugins: [],
  }))
  .pipe(gulp.dest('build/'));

  cb();
});

gulp.task('lint', () =>
  gulp.src('src/**/*.js')
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError())
);

gulp.task('dev', () => {
  gulp.watch('src/**/*.js', gulp.series('del', 'babel'));
});

gulp.task('prod', gulp.series('lint', 'del', 'babel'));

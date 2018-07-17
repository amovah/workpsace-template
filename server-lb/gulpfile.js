/* eslint-disable */

const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('babel', () =>
  gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('./'))
);

gulp.task('lint', () =>
  gulp.src('src/**/*.js')
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError())
);

gulp.task('dev', ['babel'], () => {
  gulp.watch('src/**/*.js', ['babel']);
});

gulp.task('prod', ['lint', 'babel']);

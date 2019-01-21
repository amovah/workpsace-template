/* eslint-disable */

const gulp = require('gulp');
const del = require('del');
const lint = require('gulp-eslint');

gulp.task('clean', cb =>
  del([
    'build/**',
    '!build',
  ],
    cb,
  )
);

gulp.task('lint', () =>
  gulp.src(['src/**/*.js', 'src/**/*.jsx'])
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError())
);

gulp.task('dev', gulp.series('clean'));
gulp.task('prod', gulp.series('lint', 'clean'));

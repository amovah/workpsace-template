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

gulp.task('copy', (cb) => {
  gulp.src([
    'src/index.html',
  ])
  .pipe(gulp.dest('build'));

  cb();
});

gulp.task('lint', () =>
  gulp.src(['src/**/*.js', 'src/**/*.jsx'])
  .pipe(lint())
  .pipe(lint.format())
);

gulp.task('dev', gulp.series('clean', 'copy'));
gulp.task('prod', gulp.series('lint', 'clean', 'copy'));

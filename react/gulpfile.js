/* eslint-disable */

const gulp = require('gulp');
const del = require('del');
const lint = require('gulp-eslint');
const replace = require('gulp-replace');
const config = require('./src/config.js');

gulp.task('clean', cb =>
  del([
    'build/**',
    '!build',
  ],
    cb,
  )
);

gulp.task('dev:copy', gulp.series('clean', (cb) => {
  gulp.src(
    'src/static/**/*',
  )
  .pipe(gulp.dest('build'));

  gulp.src([
    'template/**',
    '!template/index.html',
  ])
  .pipe(gulp.dest('build'));

  gulp.src(
    'template/index.html',
  )
  .pipe(replace('@@CDN@@', config.devCDN))
  .pipe(gulp.dest('build'));

  cb();
}));

gulp.task('prod:copy', gulp.series('clean', (cb) => {
  gulp.src(
    'src/static/**/*',
  )
  .pipe(gulp.dest('build'));

  gulp.src([
    'template/**',
    '!template/index.html',
  ])
  .pipe(gulp.dest('build'));

  gulp.src(
    'template/index.html',
  )
  .pipe(replace('@@CDN@@', config.prodCDN))
  .pipe(gulp.dest('build'));

  cb();
}));

gulp.task('lint', () =>
  gulp.src(['src/**/*.js', 'src/**/*.jsx'])
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError())
);

gulp.task('dev', gulp.series('dev:copy'));
gulp.task('prod', gulp.series('lint', 'prod:copy'));

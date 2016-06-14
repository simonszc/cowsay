const gulp = require('gulp');
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');

const paths = {
  js: __dirname + '/app/client.js',
  html: __dirname + '/app/index.html',
  css: __dirname + '/app/style.css'
};

gulp.task('copy', () => {
  gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle', () => {
  gulp.src(paths.js)
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('copyCSS', () => {
  gulp.src(paths.css)
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['copy', 'copyCSS', 'bundle']);

gulp.task('lint', () => {
  gulp.src(paths.js)
  .pipe(eslint())
  .pipe(eslint.format());
});

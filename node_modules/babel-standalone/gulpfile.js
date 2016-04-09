var gulp = require('gulp');
var rename = require('gulp-rename');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var uglify = require('gulp-uglify');

gulp.task('default', ['minify']);
gulp.task('minify', function() {
  return gulp.src('./babel.js')
    .pipe(uglify({
      mangle: false,
      compress: false
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('.'));
});

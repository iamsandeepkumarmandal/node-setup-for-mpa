'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
const minify = require("gulp-babel-minify");

gulp.task('sass', function () {
    return gulp.src('./public/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('start-server', function (done) {
  nodemon({
    script: './bin/www'
  })
});

gulp.task("minifyJs", function() {
  return gulp.src("./public/scripts/*.js")
  .pipe(minify({
    mangle: {
      keepClassName: true
    }
  }))
  .pipe(gulp.dest("./public/scripts/compressed"));
});

gulp.task('watch', function() {
  gulp.watch('./public/scss/**/*.scss', gulp.series(['sass']));
  gulp.watch('./public/scripts/*.js', gulp.series(['minifyJs']));
});

gulp.task('default', gulp.series(['sass', 'minifyJs']));
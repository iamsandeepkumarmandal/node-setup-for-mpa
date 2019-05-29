'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');

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


gulp.task('watch', function() {
  gulp.watch('./public/scss/**/*.scss', gulp.series(['sass']));
});

gulp.task('default', gulp.series(['sass', 'start-server']));
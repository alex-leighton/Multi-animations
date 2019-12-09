var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

function js(cb) {
    gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('js'))
    gulp.src('animations/*/*.js')
        .pipe(uglify())
        .pipe(concat('animations.min.js'))
        .pipe(gulp.dest('js'))
    cb();
}

exports.default = js
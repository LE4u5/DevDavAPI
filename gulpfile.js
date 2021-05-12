const gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    terser = require('gulp-terser'),
    replace = require('gulp-replace');

function cleanDist() {
    return gulp.src(['dist/**', 'dist/**/*.*'])
        .pipe(clean());
}
function copyJS(){
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('dist'));
}
function copyFiles(){
    return gulp.src(['Dockerfile','.env','package.json','package-lock.json','one.bash'])
    .pipe(gulp.dest('dist'))
}

exports.cleanDist = cleanDist;
exports.copyJS = copyJS;
exports.copyFiles = copyFiles;

exports.default = gulp.series(cleanDist,gulp.parallel(copyJS,copyFiles));
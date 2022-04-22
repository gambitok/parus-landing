const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat-css');
const browserSync = require('browser-sync').create();

function runSass() {
    return gulp
        .src('./sass/*.scss')
        .pipe(sass())
        .pipe(concat('./css/style.css'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
}

function reload() {
    browserSync.reload();
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/*.scss', runSass);
    gulp.watch('*.html', reload);
    gulp.watch('*.js', reload);
}

exports.sass = runSass;
exports.watch = watch;
const gulp = require('gulp')
const rename = require("gulp-rename")
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const cleanCSS = require('gulp-clean-css')

gulp.task('javascript', () => {
    return gulp.src('mountains.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename('mountains.min.js'))
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
})

gulp.task('css', function() {
    return gulp.src('mountains.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(rename('mountains.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
})

gulp.task('default', ['javascript', 'css'])
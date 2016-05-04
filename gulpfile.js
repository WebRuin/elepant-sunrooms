'use strict';
require('es6-promise').polyfill();
const postcss       = require('gulp-postcss');
const gulp          = require('gulp');
const autoprefixer  = require('autoprefixer');
const mqpacker      = require('css-mqpacker');
const csswring      = require('csswring');
const watch         = require('gulp-watch');
const minify        = require('gulp-minifier');
const imagemin      = require('gulp-imagemin');
const pngquant      = require('imagemin-pngquant');
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');

gulp.task('min-js-css', function() {
  return gulp.src('./library/css/**/*').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: false,
    minifyCSS: true,
    getKeptComment: function (content, filePath) {
        var m = content.match(/\/\*![\s\S]*?\*\//img);
        return m && m.join('\n') + '\n' || '';
    }
  })).pipe(gulp.dest('./library/prod/css/'));
});

gulp.task('images', function() {
    return gulp.src('./library/images/*')
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./library/images'));
});

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        mqpacker,
        csswring
    ];
    return gulp.src('./library/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./library/css/'));
});

gulp.task('scss', function () {
  return gulp.src('./library/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./library/css'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./library/scss/**/*.scss', ['sass']);
});



gulp.task('prod', ['scss', 'css', 'images', 'min-js-css']);
gulp.task('default', ['scss', 'css']);

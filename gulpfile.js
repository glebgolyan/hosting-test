const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();

function styles() {
  return src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

function images() {
  return src('src/img/**/*.{jpg,jpeg,png,svg,gif,webp}')
    .pipe(dest('dist/img'))
    .pipe(browserSync.stream());
}

function scripts() {
  return src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

function html() {
  return src('src/html/index.html')
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });

  watch('src/scss/**/*.scss', styles);
  watch('src/js/**/*.js', scripts);
  watch('src/img/**/*.js', images);
  watch('src/html/**/*.html', html);
}

exports.default = series(parallel(styles, images, scripts, html), serve);

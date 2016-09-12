const path = require('path');

const gulp = require('gulp');
const del = require('del');
const imagemin = require('gulp-imagemin');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('images', images);
gulp.task('favicon', favicon);
gulp.task('other', other);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function images() {
  return gulp.src(conf.path.src('/**/*.{svg,png,jpg}'))
    .pipe(imagemin())
    .pipe(gulp.dest(conf.paths.src));
}

function favicon() {
  return gulp.src('favicon/**/*')
    .pipe(gulp.dest(conf.paths.dist));
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{scss,js,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}

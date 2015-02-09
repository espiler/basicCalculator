var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');

var path = {
  sassDir: './client/scss/*.scss',
  sassSrc: './client/scss/main.scss',
  cssRoot: './client/css',
  server: './server/index.js',
  serverSideJs: './server/**/*.js',
  scripts: ['client/app/**/*.js'],
  styles: ['client/css/style.css'],
  test: './test/**/*.js'
}

gulp.task('sass', function () {
  return gulp.src(path.sassSrc)
    .pipe(sass())
    .pipe(gulp.dest(path.cssRoot));
});

gulp.task('watch', function() {
  // watch scss files
  gulp.watch(path.sassDir, ['sass']);
});

gulp.task('start',function () {
  bs({
    notify: true,
    injectChanges: true,
    proxy: 'localhost:3000'
  });
});

gulp.task('mocha', function () {
  return gulp.src(path.test)
    .pipe(mocha({reporter: 'List'}));
});

gulp.task('mochaWatch', function() {
  return gulp.watch(path.serverSideJs, ['mocha']);
})

gulp.task('default', ['sass', 'watch', 'mocha', 'start']);

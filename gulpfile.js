var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('less', function () {
  gulp.src('./app/assets/less/quickcast.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/assets/less/*.less'], ['less']);
});

gulp.task('default', ['connect', 'watch']);
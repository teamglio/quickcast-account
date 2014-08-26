var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var connect = require('gulp-connect');
var concat = require('gulp-concat');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

//scipts
gulp.task('angularjs', function() {
  gulp.src('./bower_components/angular/angular.js')
    .pipe(concat('angular.js'))
    .pipe(gulp.dest('./app/assets/js/'))
});
gulp.task('angularaddons', function() {
  gulp.src(['./bower_components/angular-ui-router/release/angular-ui-router.js','./bower_components/angular-animate/angular-animate.js'])
    .pipe(concat('angular-addons.js'))
    .pipe(gulp.dest('./app/assets/js/angular/'))
});
gulp.task('vendorsjs', function() {
  gulp.src(['./bower_components/jquery/dist/jquery.js', './bower_components/bootstrap/dist/js/bootstrap.js'])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('./app/assets/js/'))
});

gulp.task('controllersjs', function() {
  gulp.src('app/assets/js/controllers/*.js')
    .pipe(concat('controllers.js'))
    .pipe(gulp.dest('app/assets/js/'))
    .pipe(connect.reload())
});
gulp.task('servicesjs', function() {
  gulp.src('app/assets/js/services/*.js')
    .pipe(concat('services.js'))
    .pipe(gulp.dest('app/assets/js/'))
    .pipe(connect.reload())
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
  gulp.watch(['./app/views/*.html'], ['html']);
  gulp.watch(['./app/assets/less/*.less'], ['less']);
  gulp.watch(['./app/assets/js/controllers/*.js'], ['controllersjs']);
});

gulp.task('default', ['connect', 'watch']);
gulp.task('all', ['angularjs', 'angularaddons', 'vendorsjs', 'controllersjs', 'servicesjs']);
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var	uglify = require('gulp-uglify');
var	plumber = require('gulp-plumber');

//styles
gulp.task('styles',function(){
	return sass('assets/scss/*.scss')
		.pipe(plumber())
		.pipe(gulp.dest('assets/css/'));
});

//scripts
gulp.task('scripts',function(){
	return gulp.src('assets/js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/'));
});

//watch
gulp.task('watch',function(){
	gulp.watch('assets/scss/*.scss',['styles']);
	gulp.watch('assets/js/*.js',['scripts']);
});

gulp.task('default', ['styles','scripts','watch']);
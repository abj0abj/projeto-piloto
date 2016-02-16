var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber');

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
	gulp.src('assets/scss/*.scss',['styles']);
	gulp.src('assets/js/*.js',['scripts']);
});

gulp.task('default', ['styles','scripts','watch']);
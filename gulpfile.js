var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var bs = require('browser-sync').create();

gulp.task('build-css', function() {
  return sass('styles/style.scss')
  .on('error', sass.logError)
  .pipe(gulp.dest('styles/style.css'))
})

gulp.task('bs-start', function() {
  bs.init({
    server: {
      baseDir: "../notthatpeterandre",
      routes: {
        '/bower_components': 'bower_components',
      }
    }
  })
})

gulp.task('default', function() {
  console.log("I gulped it down")
})
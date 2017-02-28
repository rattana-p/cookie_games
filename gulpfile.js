var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');


gulp.task('default', function(){
  gulp.src('*.js')
  .pipe(uglify())
  .pipe(babel({ presets:['es2015']}))
  .pipe(gulp.dest('dist'));
})
var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('requireJS-demo', function () {
    return gulp.src('module/entry.js')
        .pipe(requirejsOptimize())
        .pipe(gulp.dest('dist/'));
});
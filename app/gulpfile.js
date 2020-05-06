var gulp = require('gulp');
var through = require('through2');

gulp.task('build', function() {
    return gulp.src(['./src/**/*.js', '../modules/**/*.js', '!./**/*.spec.js', '!../modules/**/*.spec.js'])
        .pipe(through.obj(function(file, enc, cb) {
            console.log(file.path);
            this.push(file);
            cb();
        }))
});
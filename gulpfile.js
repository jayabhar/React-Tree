var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var reactify = require('reactify');

console.log('browserify...')

var browserifyOptions = {
            entries: './www/js/app.js',
            extensions: ['.jsx'],
            debug: true, // required for minifyify
        };

    var bundler = browserify(browserifyOptions)
        .transform(reactify);


gulp.task('browserify', bundle);
bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
  // log errors if they happen
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source('app.js'))
  .pipe(gulp.dest('./www/dist'));

}

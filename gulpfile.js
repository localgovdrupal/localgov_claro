const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync');


function browserSyncStart() {
  browserSync.init({
    proxy: 'appserver',
    startPath: '/',
    //port: 47523,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true
    },
    open: false
  });
}


function generateStyle() {
  return (
    gulp
      .src('style/style.scss')

      // Use sass with the files found, and log any errors
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest('style/'))
  );
}

function watchStyle() {
  return (
    gulp
      .watch('./style/style.scss')
      .on('change', generateStyle)
  );
}

function serve() {
  return (
    gulp
      .watch(['./js/script.js', './css/style.css', './**/*.twig'])
      .on('change', browserSync.reload)
  );
}

const dev = gulp.series(
  generateStyle,
  gulp.parallel(browserSyncStart, watchStyle, serve)
);

// Expose the task by exporting it
// This allows you to run it from the commandline using
exports.dev = dev;

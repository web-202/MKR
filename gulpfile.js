const gulp = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-clean-css');
const copy = require('gulp-copy');

// Task to create main.html, main.js, and main.css in src folder
gulp.task('createFiles', function () {
  return gulp.src('src/')
    .pipe(gulp.dest('src'))
    .pipe(gulp.src('src/index.html').pipe(rename('main.html')))
    .pipe(gulp.src('src/index.js').pipe(rename('main.js')))
    .pipe(gulp.src('src/styles.css').pipe(rename('main.css')))
    .pipe(gulp.dest('src'));
});

// Task to add content to every file
gulp.task('addContent', function () {
  return gulp.src(['src/main.html', 'src/main.js', 'src/main.css'])
    .pipe(replace(/<head>/, '<head>\n  <!-- Added Content -->'))
    .pipe(gulp.dest('src'));
});

// Task to rename files and copy to dist folder
gulp.task('renameAndCopy', function () {
  return gulp.src(['src/main.html', 'src/main.js', 'src/main.css'])
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});

// Default task to run all tasks
gulp.task('default', gulp.series('createFiles', 'addContent', 'renameAndCopy'));
const gulp = require('gulp');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const htmlReplace = require("gulp-html-replace");

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.task('js-dev', function () {
    return gulp.src([
        'src/'
    ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('src/scripts'));
});

gulp.task('code', function () {
    return gulp.src('src/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('copy', async function () {
    gulp.src([
        'src/styles/main.css'
    ])
        .pipe(rename('main.css'))
        .pipe(gulp.dest('dist/styles'))

    gulp.src('src/scripts/**/*')
        .pipe(rename('main.js'))
        .pipe(gulp.dest('dist/scripts'))

    gulp.src('src/*.html')
        .pipe(htmlReplace({
            "css": "styles/main.css",
            "js": "scripts/main.js"
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/main.html', gulp.parallel('code'));
    gulp.watch("src/scripts/main.js", gulp.parallel('js-dev'));
});

gulp.task('default', gulp.parallel('js-dev', 'browser-sync', 'watch'));
gulp.task('build', gulp.series('copy'));
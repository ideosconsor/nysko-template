const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');


function scss(){
    return gulp.src('sass/main.scss')
        .pipe(sass())
            .pipe(gulp.dest('src/css/'))
                .pipe(browserSync.stream());
};

function minifyCss() {
    return gulp.src('src/css/main.css')
            .pipe(cleanCSS())
                .pipe(gulp.dest('src/css/'));
};

function minify() {
    return gulp.src([
         'src/js/api.js',
         'src/js/footer.js',
         'src/js/functions.js',
         'src/js/header.js',
         'src/js/navbar.js',
         'src/js/section.js',
        ])
       .pipe(uglify())
            .pipe(gulp.dest('src/js/app.js')) // It will create folder client.min.js
 };

// DEFAULT TASK -- ONLY GULP TO WRITE
function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', gulp.series(scss, minifyCss, minify));
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/*.js').on('change', browserSync.reload);
}

exports.default = watch;

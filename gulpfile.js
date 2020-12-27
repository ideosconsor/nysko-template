const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');


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

// DEFAULT TASK -- ONLY GULP TO WRITE
function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', gulp.series(scss, minifyCss));
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/*.js').on('change', browserSync.reload);
}

exports.default = watch;

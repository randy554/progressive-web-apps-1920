const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
    "./src/css/main.css",
    "./src/css/question.css"
])
    .pipe(concat("index.css")) // samenvoegen bestanden en bestandsnaam opgeven
    .pipe(cleanCSS()) // minify de css
    .pipe(autoprefixer({cascade: false})) // regelt webkit
    .pipe(gulp.dest("./public/css"));

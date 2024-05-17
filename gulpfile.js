"use strict";

const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');


sass.compiler = require("node-sass"); //Necessario para funcionar o gulp-sass

gulp.task("default", watch);

gulp.task("sass", compilaSass);

function compilaSass() {
    return gulp
        .src("scss/global.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename('saudeeortopedia.css'))
        .pipe(gulp.dest("./"))
        .pipe(gulp.dest("./assets/"));
}
function compilaSass2() {
    return gulp
    .src("scss/vtex.store-icons.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write()) 
    .pipe(gulp.dest("./styles/css/"));  

}
function watch() {
    gulp.watch(['scss/**/*.scss'], compilaSass);
    gulp.watch(['scss/**/*.scss'], compilaSass2);
}
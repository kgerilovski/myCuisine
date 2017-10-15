'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const shell = require('gulp-shell')
const imagemin = require('gulp-imagemin');

const $ = plugins();

gulp.task('deploy', shell.task([
    'firebase deploy'
]));

gulp.task('configs', function() {
    gulp.src('public/configs/*.js')
        .pipe($.minify({
            ext:{
                src: '.js',
                min: '.js'
            },
            noSource: {}
        }))
        .pipe(gulp.dest('dist/configs'));
});

gulp.task('scripts', function() {
    gulp.src('public/controllers/*.js')
        .pipe($.plumber())
        .pipe($.minify({
            ext:{
                src: '.js',
                min: '.js'
            },
            noSource: {}
        }))
        .pipe(gulp.dest('dist/controllers'));
});

gulp.task('css', function() {
    gulp.src('public/css/*')
        .pipe($.plumber())
        .pipe($.cssnano())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('images', function() {
    gulp.src('public/images/*')
        .pipe($.plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('build:dist', ['configs', 'scripts', 'css', 'images']);
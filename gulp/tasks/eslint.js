'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function() {
    return gulp.src(
        [
            'gulpfile.js',
            'gulp/**/*.js',
            'src/**/*.js',
            'tests/**/*.js',
            '!src/selectivity-custom.js'
        ])
        .pipe(eslint('.eslintrc'))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};

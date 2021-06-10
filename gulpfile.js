/**
 * @file gulpfile.js
 */

const gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify');

gulp.task('build', () =>
    gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: [['@babel/env', {modules: 'commonjs'}]],
            plugins: ['@babel/plugin-transform-runtime']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
);

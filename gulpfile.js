const gulp = require('gulp')
const shell = require('shelljs')
const sass = require('gulp-sass')

const files = [
    'views/*',
    'views/**/*',
    'views/**/**/*',
    'views/**/**/**/*'
]

gulp.task('scss', () => {
    gulp.watch('./views/assets/css/*.scss', ['scss-covert'])
})

gulp.task('scss-covert', () => {
    gulp.src('./views/assets/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./views/assets/css/'))
})

gulp.task('default', ['scss'])
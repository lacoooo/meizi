const gulp = require('gulp')
const shell = require('shelljs')
const sass = require('gulp-sass')

const files = [
    'views/*',
    'views/**/*',
    'views/**/**/*',
    'views/**/**/**/*'
]

gulp.task('views', () => {
    gulp.watch(files, ['copy'])
})

gulp.task('scss', () => {
    gulp.watch('./views/assets/css/*.scss', ['scss-covert'])
})

gulp.task('scss-covert', () => {
    gulp.src('./views/assets/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./views/assets/css/'))
})

gulp.task('copy', () => {
    shell.rm('-rf', './server/views')
    shell.cp('-R', './views/', './server')
})

gulp.task('default', ['scss', 'views'])
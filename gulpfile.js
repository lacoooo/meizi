const gulp = require('gulp')
const shell = require('shelljs')

const files = [
    'views/*',
    'views/**/*',
    'views/**/**/*',
    'views/**/**/**/*'
]

gulp.task('views', () => {
    gulp.watch(files, ['copy'])
})

gulp.task('copy', () => {
    shell.rm('-rf', './server/views')
    shell.cp('-R', './views/', './server')
})

gulp.task('default', ['views'])
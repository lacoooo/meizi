const shell = require('shelljs')

const a = shell.exec('npm run tsc', { async: true })
a.stdout.on('data', (data) => {
    shell.mkdir('./server')
    shell.rm('-rf', './server/views')
    shell.cp('-R', './views/', './server')
    const b = shell.exec('npm run gulp', { async: true })
    b.stdout.on('data', (data) => {
        shell.exec('npm run nodemon')
    })
});
const shell = require('shelljs')

const a = shell.exec('npm run tsc', { async: true })
a.stdout.on('data', (data) => {
    shell.mkdir('./server')
    shell.mkdir('./server/views')
    shell.cp('./views/*', './server/views')
    shell.exec('npm run nodemon')
});
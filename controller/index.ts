import * as fs from 'fs'
import * as path from 'path'
const dir = path.resolve(__dirname + '/../views/index.html')

function read(dir) {
    return new Promise((resolve, reject) => {
        fs.readFile(dir, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

export default {
    async index() {
        return await read(dir)
    }
}
import * as fs from 'fs'
import * as path from 'path'
import { resolve } from 'dns'
import { rejects } from 'assert'

const exist = async (dir) => {
    return new Promise((resolve, rejects) => {
        fs.stat(dir, (err, data) => {
            if (err) resolve(false)
            else resolve(true)
        })
    })
}

const readDir = async (dir) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, 'utf-8', (err, files) => {
            resolve(files[0])
        })
    })
}

const readFile = async (dir, titlesPath) => {
    return new Promise((resolve, rejects) => {
        fs.readFile(`${dir}/${titlesPath}`, 'utf-8', (err, data) => {
            resolve(data)
        });
    })
}

export default {
    async index(page, type, url) {
        const dir = path.resolve(`${__dirname}/../../../data/${type}/${page}`)

        let imgs = []
        let existPath = await exist(dir)
        if (existPath) {
            let titlesPath = await readDir(dir)
            let titles = await readFile(dir, titlesPath) + ''
            console.log(JSON.parse(titles))
            imgs = JSON.parse(titles).pics

        }

        const info = {
            url: url,
            page: page,
            data: imgs
        }

        return info
    }
}
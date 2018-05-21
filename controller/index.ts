import * as fs from 'fs'
import * as path from 'path'

export default {
    index(page, type, url) {
        const dir = path.resolve(`${__dirname}/../../../data/${type}/${page}`)

        let imgs = []
        if (fs.existsSync(dir)) {
            let titlesPath = fs.readdirSync(dir)[0]
            let titles = fs.readFileSync(`${dir}/${titlesPath}`, 'utf-8')
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
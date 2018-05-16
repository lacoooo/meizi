import * as fs from 'fs'
import * as path from 'path'

export default {
    index(page) {
        const dir = path.resolve(`${__dirname}/../../../../data/qiubaigif/${page}`)

        let imgs = fs.readdirSync(dir)
        let titlesPath = imgs.pop()
        let titles = fs.readFileSync(`${dir}/${titlesPath}`, 'utf-8')
        imgs = JSON.parse(titles).pics

        const info = {
            page: page,
            data: imgs
        }

        return info
    }
}
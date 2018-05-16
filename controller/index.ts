import * as fs from 'fs'
import * as path from 'path'
const dir = path.resolve(__dirname + '/../../../../data/xiegif/1/')

export default {
    index() {
        return {
            url: dir,
            data: fs.readdirSync(dir)
        }
    }
}
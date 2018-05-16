import controller from '../controller/index'
import * as Router from 'koa-router'

const api = new Router()

api
    .get('/', async (ctx, next) => {
        const data = controller.index()
        data.data.pop()
        console.log(data)
        await ctx.render('index', data)
    })

export default api

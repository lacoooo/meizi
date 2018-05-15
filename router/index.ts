import controller from '../controller/index'
import * as Router from 'koa-router'

const api = new Router()

api
    .get('/', async (ctx, next) => {
        const data = await controller.index()
        await ctx.render('index', data)
    })

export default api

import controller from '../controller/index'
import * as Router from 'koa-router'

const api = new Router()

api
    .get('/', async (ctx, next) => {
        ctx.body = await controller.index()
    })

export default api

import controller from '../controller/index'
import * as Router from 'koa-router'

const api = new Router()

api

    .get('/', async (ctx, next) => {
        const page = 1
        const info = controller.index(page)
        await ctx.render('index', info)
    })

    .get('/mmgif/:page', async (ctx, next) => {
        const page = ctx.params.page
        const info = controller.index(page)
        await ctx.render('index', info)
    })



export default api

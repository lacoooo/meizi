import controller from '../controller/index'
import * as Router from 'koa-router'

const api = new Router()

api

    .get('/', async (ctx, next) => {
        const page = 1
        const info = controller.index(page, 'gif')
        await ctx.render('index', info)
    })

    .get('/gif/:page', async (ctx, next) => {
        const page = ctx.params.page
        const info = controller.index(page, 'gif')
        await ctx.render('index', info)
    })

    .get('/gif2/:page', async (ctx, next) => {
        const page = ctx.params.page
        const info = controller.index(page, 'gif2')
        await ctx.render('index', info)
    })

    .get('/pic/:page', async (ctx, next) => {
        const page = ctx.params.page
        const info = controller.index(page, 'pic')
        await ctx.render('index', info)
    })

export default api

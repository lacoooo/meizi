import controller from '../controller/index'
import * as Router from 'koa-router'

const api = new Router()

api

    .get('/', async (ctx, next) => {
        const page = 1
        const info = await controller.index(page, 'gif_doc', 'gif')
        await ctx.render('index', info)
    })

    .get('/gif/:page', async (ctx, next) => {
        const page = ctx.params.page
        const info = await controller.index(page, 'gif_doc', 'gif')
        if (info.data.length < 1) {
            ctx.redirect('/gif/1');ctx.status = 301
            return
        }
        await ctx.render('index', info)
    })

    .get('/gif2/:page', async (ctx, next) => {
        const page = ctx.params.page
        const info = await controller.index(page, 'gif2_doc', 'gif2')
        if (info.data.length < 1) {
            ctx.redirect('/gif2/1');ctx.status = 301
            return
        }
        await ctx.render('index', info)
    })

    .get('/gif3/:page', async (ctx, next) => {
        const page = ctx.params.page
        const info = await controller.index(page, 'gif3_doc', 'gif3')
        if (info.data.length < 1) {
            ctx.redirect('/gif3/1');ctx.status = 301
            return
        }
        await ctx.render('index', info)
    })

    .get('/pic/:page', async (ctx, next) => {
        const page = ctx.params.page
        const info = await controller.index(page, 'pic_doc', 'pic')
        if (info.data.length < 1) {
            ctx.redirect('/pic/1');ctx.status = 301
            return
        }
        await ctx.render('index', info)
    })

    .get('/pic2/:page', async (ctx, next) => {
        const page = ctx.params.page
        const info = await controller.index(page, 'pic2_doc', 'pic2')
        if (info.data.length < 1) {
            ctx.redirect('/pic2/1');ctx.status = 301
            return
        }
        await ctx.render('index', info)
    })

export default api

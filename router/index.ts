import controller from '../controller/index'
import * as Router from 'koa-router'

const api = new Router()

api
    .get('/mmgif/:page', async (ctx, next) => {
        const page = ctx.params.page
        const data = controller.index(page)
        await ctx.render('index', data)
    })

export default api

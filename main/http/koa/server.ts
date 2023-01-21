import koa from 'koa'
import routerKoa from './routes/UserRouterKoa'
import bodyParser from 'koa-bodyparser'

const app = new koa()
app.use(bodyParser())
app.use(routerKoa.routes())
app.listen(3000, () => {
  console.log(`Server Koa is runnung at 3000`)
})

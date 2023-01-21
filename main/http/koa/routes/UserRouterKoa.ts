import Router from '@koa/router'
import { CreateUser } from '../../../../domain/app/User/CreateUser'
import { CreateUserRouter } from '../../../../domain/controllers/User/CreateUserRouter'
import { InMemoryRepository } from '../../../repositories/User/InMemoryUsersRepository'
import { KoaRouterAdapter } from '../adapters/KoaRouterAdapter'

const router = new Router()

// router.post('/register', async (ctx: any) => {
//   console.log(ctx.request.body)

//   ctx.response.status = 200
// })

router.post(
  '/register',
  KoaRouterAdapter.adapt(
    new CreateUserRouter(new CreateUser(new InMemoryRepository()))
  )
)

export default router

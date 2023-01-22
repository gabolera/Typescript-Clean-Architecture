import { Router } from 'express'
import { CreateUser } from '../../../../domain/app/User/CreateUser'
import { CreateUserRouter } from '../../../../domain/controllers/User/CreateUserRouter'
import { InMemoryUsersRepository } from '../../../repositories/User/InMemoryUsersRepository'
import { ExpressRouterAdapter } from '../adapters/ExpressRouterAdapter'

const router = Router()

router.post(
  '/register',
  ExpressRouterAdapter.adapt(
    new CreateUserRouter(new CreateUser(new InMemoryUsersRepository()))
  )
)

export default router

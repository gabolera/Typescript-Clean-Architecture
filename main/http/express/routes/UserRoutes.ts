import { Router } from 'express'
import { CreateUser } from '../../../../domain/app/User/CreateUser'
import { CreateUserRouter } from '../../../../domain/controllers/User/CreateUserRouter'
import { InMemoryRepository } from '../../../repositories/User/InMemoryRepository'
import { ExpressRouterAdapter } from '../adapters/ExpressRouterAdapter'

const router = Router()

router.post(
  '/register',
  ExpressRouterAdapter.adapt(
    new CreateUserRouter(new CreateUser(new InMemoryRepository()))
  )
)

export default router

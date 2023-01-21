import { describe, test, expect } from 'vitest'
import { CreateUser } from '../../app/User/CreateUser'
import { InMemoryRepository } from '../../../main/repositories/User/InMemoryRepository'
import { CreateUserRouter } from './CreateUserRouter'

describe('Create User Controller', () => {
  test('Should 200 with create user', async () => {
    const userRepository = new InMemoryRepository()
    const useCase = new CreateUser(userRepository)
    const sut = new CreateUserRouter(useCase)

    const clientRequest = {
      body: {
        name: 'Gabriel',
        email: 'dev@andreazza.dev',
        password: '123456',
        confirm_password: '123456',
      },
    }
    const retornoApp = await sut.call(clientRequest)
    expect(retornoApp.statusCode).toEqual(200)
    // expect(sut.data).toEqual({ myProp: 'anyProp' })
  })

  test('Should 400 if empty email', async () => {
    const userRepository = new InMemoryRepository()
    const useCase = new CreateUser(userRepository)
    const sut = new CreateUserRouter(useCase)

    let clientRequest: any = {
      body: {
        name: 'Gabriel',
        email: '',
        password: '123456',
        confirm_password: '123456',
      },
    }

    let retornoApp = await sut.call(clientRequest)
    expect(retornoApp.statusCode).toEqual(400)

    clientRequest = {
      body: {
        name: 'Gabriel',
        password: '123456',
        confirm_password: '123456',
      },
    }
    retornoApp = await sut.call(clientRequest)
    expect(retornoApp.statusCode).toEqual(400)
  })

  test('Should 400 if empty password', async () => {
    const userRepository = new InMemoryRepository()
    const useCase = new CreateUser(userRepository)
    const sut = new CreateUserRouter(useCase)

    let clientRequest: any = {
      body: {
        name: 'Gabriel',
        email: 'dev@andreazza.dev',
        password: '',
        confirm_password: '123456',
      },
    }
    let retornoApp = await sut.call(clientRequest)
    expect(retornoApp.statusCode).toEqual(400)

    clientRequest = {
      body: {
        name: 'Gabriel',
        email: 'dev@andreazza.dev',
        confirm_password: '123456',
      },
    }
    retornoApp = await sut.call(clientRequest)
    expect(retornoApp.statusCode).toEqual(400)
  })

  test('Should 400 if empty name', async () => {
    const userRepository = new InMemoryRepository()
    const useCase = new CreateUser(userRepository)
    const sut = new CreateUserRouter(useCase)

    let clientRequest: any = {
      body: {
        name: '',
        email: 'dev@andreazza.dev',
        password: '123456',
        confirm_password: '123456',
      },
    }
    let retornoApp = await sut.call(clientRequest)
    expect(retornoApp.statusCode).toEqual(400)

    clientRequest = {
      body: {
        email: 'dev@andreazza.dev',
        password: '123456',
        confirm_password: '123456',
      },
    }
    retornoApp = await sut.call(clientRequest)
    expect(retornoApp.statusCode).toEqual(400)
  })

  test('Should 400 if passwords dont match', async () => {
    const userRepository = new InMemoryRepository()
    const useCase = new CreateUser(userRepository)
    const sut = new CreateUserRouter(useCase)

    let clientRequest: any = {
      body: {
        name: 'Gabriel',
        email: 'dev@andreazza.dev',
        password: '123456',
        confirm_password: '1234567',
      },
    }
    let retornoApp = await sut.call(clientRequest)
    expect(retornoApp.statusCode).toEqual(400)
  })
})

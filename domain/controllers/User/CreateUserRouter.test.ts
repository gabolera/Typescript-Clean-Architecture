import { describe, test, expect } from 'vitest'
import { CreateUser } from '../../app/User/CreateUser'
import { userRepositorieDynamicTest } from '../../helpers/config/repositorieDynamicTest'
import { CreateUserRouter } from './CreateUserRouter'

describe('Create User Controller', () => {
  test('Espero receber 400 se o campo email estiver vazio', async () => {
    const useCase = new CreateUser(userRepositorieDynamicTest)
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

  test('Espero receber 400 se o campo password estiver vazio', async () => {
    const useCase = new CreateUser(userRepositorieDynamicTest)
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

  test('Espero receber 400 se o campo name estiver vazio', async () => {
    const useCase = new CreateUser(userRepositorieDynamicTest)
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

  test('Espero receber 400 se as senhas não corresponderem', async () => {
    const useCase = new CreateUser(userRepositorieDynamicTest)
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

  test('Espero receber 200 se criando o usuário corretamente', async () => {
    const useCase = new CreateUser(userRepositorieDynamicTest)
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
    expect(retornoApp.data.user).keys('id', 'email', 'name')
  })
})

import { describe, test, expect } from 'vitest'
import { repositorieDynamicTest } from '../../config/repositorieDynamicTest'
import { User } from './core/User'
import { CreateUser } from './CreateUser'
import { GetUserInfo } from './GetUserInfo'

describe('GetUserInfo - Use Case', async () => {
  test('Pega informações do usuário', async () => {
    const repo = new repositorieDynamicTest()
    const createUser = new CreateUser(repo)
    await createUser.handle(
      new User({
        email: 'teste@teste.com',
        name: 'Teste',
        password: '123456',
        id: 'test_id',
      })
    )

    const sut = new GetUserInfo(repo)
    const users = await sut.handle('test_id')
    expect(users).keys('id', 'name', 'email')
  })
})

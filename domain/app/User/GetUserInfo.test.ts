import { describe, test, expect } from 'vitest'
import { userRepositorieDynamicTest } from '../../helpers/config/repositorieDynamicTest'
import { User } from '../../entities/User'
import { CreateUser } from './CreateUser'
import { GetUserInfo } from './GetUserInfo'

describe('GetUserInfo - Use Case', async () => {
  test('Pega informações do usuário', async () => {
    const createUser = new CreateUser(userRepositorieDynamicTest)
    await createUser.handle(
      new User({
        email: 'teste@teste.com',
        name: 'Teste',
        password: '123456',
        id: 'test_id',
      })
    )

    const sut = new GetUserInfo(userRepositorieDynamicTest)
    const users = await sut.handle('test_id')
    expect(users).keys('id', 'name', 'email')
  })
})

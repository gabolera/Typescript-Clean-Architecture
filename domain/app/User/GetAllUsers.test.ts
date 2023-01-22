import { describe, test, expect } from 'vitest'
import { userRepositorieDynamicTest } from '../../helpers/config/repositorieDynamicTest'
import { User } from '../../entities/User'
import { CreateUser } from './CreateUser'
import { GetAllUsers } from './GetAllUsers'

describe('GetAllUsers - Use Case', async () => {
  test('Pegar lista de usuários', async () => {
    const createUser = new CreateUser(userRepositorieDynamicTest)
    await createUser.handle(
      new User({ email: 'teste@teste.com', name: 'Teste', password: '123456' })
    )

    const sut = new GetAllUsers(userRepositorieDynamicTest)
    const users = await sut.handle()
    expect(users[0]).keys('id', 'name', 'email')
  })
})

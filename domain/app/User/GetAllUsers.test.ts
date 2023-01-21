import { describe, test, expect } from 'vitest'
import { repositorieDynamicTest } from '../../config/repositorieDynamicTest'
import { User } from './core/User'
import { CreateUser } from './CreateUser'
import { GetAllUsers } from './GetAllUsers'

describe('GetAllUsers - Use Case', async () => {
  test('Pegar lista de usuários', async () => {
    const repo = new repositorieDynamicTest()
    const createUser = new CreateUser(repo)
    await createUser.handle(
      new User({ email: 'teste@teste.com', name: 'Teste', password: '123456' })
    )

    const sut = new GetAllUsers(repo)
    const users = await sut.handle()
    expect(users[0]).keys('id', 'name', 'email')
  })
})

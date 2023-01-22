import { describe, test, expect } from 'vitest'
import { userRepositorieDynamicTest } from '../../helpers/config/repositorieDynamicTest'
import { User } from '../../entities/User'
import { CreateUser } from './CreateUser'
import { UpdateUser } from './UpdateUser'

describe('Update User - Use Case', async () => {
  test('Atualizando dados do usuário', async () => {
    const createUser = new CreateUser(userRepositorieDynamicTest)

    const userData = new User({
      email: 'teste@teste.com',
      name: 'Teste',
      password: '123456',
    })
    await createUser.handle(userData)

    const updateUser = new User({
      email: userData.email,
      name: userData.name,
    })

    const sut = new UpdateUser(userRepositorieDynamicTest)
    const users = await sut.handle(userData.id, updateUser)
    expect(users).keys('id', 'name', 'email')
  })
})

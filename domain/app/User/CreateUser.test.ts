import { describe, test, expect } from 'vitest'
import { userRepositorieDynamicTest } from '../../helpers/config/repositorieDynamicTest'
import { MissingParamsError } from '../../helpers/errors/MissingParamsError'
import { User } from '../../entities/User'
import { CreateUser } from './CreateUser'

describe('Create User Use Case', () => {
  test('Espero receber erro ao cadastrar um usuário que sem password', async () => {
    const sut = new CreateUser(userRepositorieDynamicTest)
    const user = new User({
      email: 'test@andreazza.dev',
      name: 'Test User',
      password: '',
      id: 'any_id_user',
    })
    const promise = sut.handle(user)
    expect(promise).rejects.toThrow(new MissingParamsError('Password'))
  })

  test('Espero receber erro ao cadastrar um usuário que sem name', async () => {
    const sut = new CreateUser(userRepositorieDynamicTest)
    const user = new User({
      email: 'test@andreazza.dev',
      name: '',
      password: '1234567',
      id: 'any_id_user',
    })
    const promise = sut.handle(user)
    expect(promise).rejects.toThrow(new MissingParamsError('Name'))
  })

  test('Espero receber erro ao cadastrar um usuário que sem email', async () => {
    const sut = new CreateUser(userRepositorieDynamicTest)
    const user = new User({
      email: '',
      name: 'Test User',
      password: '1234567',
      id: 'any_id_user',
    })
    const promise = sut.handle(user)
    expect(promise).rejects.toThrow(new MissingParamsError('Email'))
  })
})

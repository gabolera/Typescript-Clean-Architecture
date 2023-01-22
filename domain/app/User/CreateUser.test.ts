import { describe, test, expect } from 'vitest'
import { repositorieDynamicTest } from '../../config/repositorieDynamicTest'
import { MissingParamsError } from '../../errors/MissingParamsError'
import { User } from '../../@entities/User'
import { CreateUser } from './CreateUser'

describe('Create User Use Case', () => {
  test('Espero receber erro ao cadastrar um usuário que sem password', async () => {
    const repo = new repositorieDynamicTest()
    const sut = new CreateUser(repo)
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
    const repo = new repositorieDynamicTest()
    const sut = new CreateUser(repo)
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
    const repo = new repositorieDynamicTest()
    const sut = new CreateUser(repo)
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

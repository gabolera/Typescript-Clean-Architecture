import { InMemoryUsersRepository } from '../../../main/repositories/User/InMemoryUsersRepository'

export const userRepositorieDynamicTest: any =
  InMemoryUsersRepository.getInstance()

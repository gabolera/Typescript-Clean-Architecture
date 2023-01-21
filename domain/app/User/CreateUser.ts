import { MissingParamsError } from '../../errors/MissingParamsError'
import { User } from './core/User'
import { UserRepositoryInterface } from './core/UserRepositoryInterface'

export class CreateUser {
  constructor(private userRepository: UserRepositoryInterface) {}

  async handle(user: User): Promise<UserOutput> {
    try {
      if (!user.password) {
        throw new MissingParamsError('Password')
      }

      if (!user.email) {
        throw new MissingParamsError('Email')
      }

      if (!user.name) {
        throw new MissingParamsError('Name')
      }

      let createdUser: any = await this.userRepository.create(user)
      let userInfos = createdUser.getProps()
      delete userInfos.password
      return userInfos
    } catch (err: any) {
      throw err
    }
  }
}

type UserOutput = {
  id: String | undefined
  name: String
  email: String
}

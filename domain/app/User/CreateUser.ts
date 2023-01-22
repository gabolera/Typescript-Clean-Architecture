import { MissingParamsError } from '../../helpers/errors/MissingParamsError'
import { User, UserProps } from '../../entities/User'
import { UserRepositoryInterface } from '../../repositories/UserRepositoryInterface'

export class CreateUser {
  constructor(private userRepository: UserRepositoryInterface) {}

  async handle(user: User): Promise<UserProps> {
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

      let createdUser = await this.userRepository.create(user)
      delete createdUser.password
      return createdUser
    } catch (err: any) {
      throw err
    }
  }
}

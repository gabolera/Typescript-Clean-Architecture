import { User } from './core/User'
import { UserRepositoryInterface } from './core/UserRepositoryInterface'

export class CreateUser {
  constructor(private userRepository: UserRepositoryInterface) {}

  async handle(user: User) {
    try {
      await this.userRepository.create(user)
    } catch (err: any) {}
  }
}

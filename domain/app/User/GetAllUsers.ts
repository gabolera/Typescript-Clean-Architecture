import { UserProps } from './core/User'
import { UserRepositoryInterface } from './core/UserRepositoryInterface'

export class GetAllUsers {
  constructor(private userRepository: UserRepositoryInterface) {}

  async handle(): Promise<UserProps[]> {
    let users = await this.userRepository.getAllUsers()
    return users
  }
}

import { UserProps } from '../../entities/User'
import { UserRepositoryInterface } from '../../repositories/UserRepositoryInterface'

export class GetAllUsers {
  constructor(private userRepository: UserRepositoryInterface) {}

  async handle(): Promise<UserProps[]> {
    let users = await this.userRepository.getAllUsers()
    return users
  }
}

import { User, UserProps } from '../../entities/User'
import { UserRepositoryInterface } from '../../repositories/UserRepositoryInterface'

export class UpdateUser {
  constructor(private userRepository: UserRepositoryInterface) {}

  async handle(id: String, user: User): Promise<UserProps> {
    let updatedUser = await this.userRepository.update(id, user)
    delete updatedUser.password
    return updatedUser
  }
}

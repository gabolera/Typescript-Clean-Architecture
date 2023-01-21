import { UserProps } from './core/User'
import { UserRepositoryInterface } from './core/UserRepositoryInterface'

export class GetUserInfo {
  constructor(private userRepository: UserRepositoryInterface) {}

  async handle(id: String): Promise<UserProps> {
    let user = await this.userRepository.getUserInfo(id)
    return user
  }
}

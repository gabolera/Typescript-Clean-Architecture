import { User } from '../../@entities/User'
import { UserRepositoryInterface } from '../../@repositories/UserRepositoryInterface'

export class UpdateUser {
  constructor(private userRepository: UserRepositoryInterface) {}

  async handle(id: String, user: User) {}
}

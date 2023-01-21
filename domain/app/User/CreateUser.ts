import { User } from './core/User'
import { UserRepositoryInterface } from './core/UserRepositoryInterface'

export class CreateUser {
  constructor(private userRepository: UserRepositoryInterface) {}

  async handle(user: User): Promise<UserOutput> {
    try {
      let createdUser: any = await this.userRepository.create(user)
      let userInfos = createdUser.getProps()
      delete userInfos.password
      return userInfos
    } catch (err: any) {
      console.error(err)
      throw new Error('Não foi possível cadastrar este usuário!')
    }
  }
}

type UserOutput = {
  id: String | undefined
  name: String
  email: String
}

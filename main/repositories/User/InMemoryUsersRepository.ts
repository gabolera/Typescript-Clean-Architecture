import { User, UserProps } from '../../../domain/app/User/core/User'
import { UserRepositoryInterface } from '../../../domain/app/User/core/UserRepositoryInterface'

export class InMemoryUsersRepository implements UserRepositoryInterface {
  private items: UserProps[] = []

  constructor() {}

  async create(user: User): Promise<User> {
    this.items.push({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    })
    return user
  }

  async getAllUsers(): Promise<UserProps[]> {
    let filterUsers: UserProps[] = this.items
    filterUsers.map((user: any) => {
      delete user.password
    })
    return filterUsers
  }

  async getUserInfo(id: String): Promise<UserProps> {
    let userFind: any = this.items.filter((x) => x.id === id)
    let infos: UserProps = {
      id: userFind.id,
      name: userFind.name,
      email: userFind.email,
    }
    return infos
  }
}

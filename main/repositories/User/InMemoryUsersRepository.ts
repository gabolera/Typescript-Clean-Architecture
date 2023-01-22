import { User, UserProps } from '../../../domain/entities/User'
import { UserRepositoryInterface } from '../../../domain/repositories/UserRepositoryInterface'

export class InMemoryUsersRepository implements UserRepositoryInterface {
  private items: UserProps[]

  private static INSTANCE: InMemoryUsersRepository

  constructor() {
    this.items = []
  }

  public static getInstance() {
    if (!InMemoryUsersRepository.INSTANCE) {
      InMemoryUsersRepository.INSTANCE = new InMemoryUsersRepository()
    }
    return InMemoryUsersRepository.INSTANCE
  }

  async create(user: User): Promise<UserProps> {
    let userData: UserProps = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    }
    this.items.push(userData)
    return userData
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

  async update(id: String, user: User): Promise<UserProps> {
    let userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    }
    this.items.map((x) => {
      x.id === id
      x = userData
    })

    return userData
  }
}

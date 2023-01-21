import { User } from '../../../domain/app/User/core/User'
import { UserRepositoryInterface } from '../../../domain/app/User/core/UserRepositoryInterface'

export class InMemoryRepository implements UserRepositoryInterface {
  private items: User[] = []

  constructor() {}

  async create(user: User) {
    this.items.push(user)
  }
}

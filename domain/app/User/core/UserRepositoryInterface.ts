import { User } from './User'

export interface UserRepositoryInterface {
  create(user: User): Promise<void>
}

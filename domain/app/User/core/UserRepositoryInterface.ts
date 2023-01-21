import { User, UserProps } from './User'

export interface UserRepositoryInterface {
  create(user: User): Promise<User>
  getAllUsers(): Promise<UserProps[]>
  getUserInfo(id: String): Promise<UserProps>
}

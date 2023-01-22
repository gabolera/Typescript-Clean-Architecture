import { User, UserProps } from '../entities/User'

export interface UserRepositoryInterface {
  create(user: User): Promise<UserProps>
  getAllUsers(): Promise<UserProps[]>
  getUserInfo(id: String): Promise<UserProps>
  update(id: String, user: User): Promise<UserProps>
}

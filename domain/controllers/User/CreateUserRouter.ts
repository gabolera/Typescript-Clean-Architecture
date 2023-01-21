import { CreateUser } from '../../app/User/CreateUser'
import { RequestInterface } from '../../../utils/interfaces/RequestInterface'
import HttpResponse from '../../helpers/HttpResponse'
import { CustomControllerInterface } from '../CustomControllerInterface'
import { User } from '../../app/User/core/User'

export class CreateUserRouter implements CustomControllerInterface {
  constructor(private useCaseCreateUser: CreateUser) {}
  async call(req: RequestInterface): Promise<any> {
    try {
      let { name, email, password, confirm_password }: any = req.body
      if (!name || !email || !password) {
        return HttpResponse.status(400).json({
          message: 'Campos obrigatórios faltante!',
        })
      }

      if (password !== confirm_password) {
        return HttpResponse.status(400).json({
          message: 'As senhas não conferem!',
        })
      }

      let user = new User({ name, email, password })
      await this.useCaseCreateUser.handle(user)
      return HttpResponse.status(200).json({
        message: 'Usuário cadastrado com sucesso',
      })
    } catch (err: any) {
      return HttpResponse.status(400).json({ message: err.message })
    }
  }
}

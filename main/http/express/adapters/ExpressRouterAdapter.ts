import { Request, Response } from 'express'
import { RequestInterface } from '../../../../utils/interfaces/RequestInterface'
import { CustomControllerInterface } from '../../../../domain/controllers/CustomControllerInterface'

export class ExpressRouterAdapter {
  static adapt(router: CustomControllerInterface) {
    return async (req: Request, res: Response) => {
      const request: RequestInterface = {
        body: req.body,
        headers: req.headers,
      }
      const httpResponse = await router.call(request)
      res.status(httpResponse.statusCode).json(httpResponse.data)
    }
  }
}

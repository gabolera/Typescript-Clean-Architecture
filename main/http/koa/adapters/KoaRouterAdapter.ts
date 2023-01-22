import { RequestInterface } from '../../../../utils/interfaces/RequestInterface'
import { CustomControllerInterface } from '../../../../domain/interfaces/CustomControllerInterface'

export class KoaRouterAdapter {
  static adapt(router: CustomControllerInterface) {
    return async (ctx: any) => {
      const request: RequestInterface = {
        body: ctx.request.body,
        headers: ctx.request.headers,
      }
      const httpResponse = await router.call(request)
      ctx.response.status = httpResponse.statusCode
      ctx.response.body = httpResponse.data
    }
  }
}

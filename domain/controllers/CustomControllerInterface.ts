import HttpResponse from '../helpers/HttpResponse'

export interface CustomControllerInterface {
  call(router: any): Promise<any>
}

export interface CustomControllerInterface {
  call(router: any): Promise<any>
}

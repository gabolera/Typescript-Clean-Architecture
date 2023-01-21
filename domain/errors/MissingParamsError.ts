export class MissingParamsError extends Error {
  constructor(field?: string) {
    super(`O campo ${field} não foi informado!`)
    this.name = 'MissingParamsError'
  }
}

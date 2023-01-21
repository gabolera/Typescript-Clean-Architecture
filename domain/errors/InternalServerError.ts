export class InternalServerError extends Error {
  constructor(err: any) {
    super(
      `Algum desenvolvedor fez alguma cagada, segue os detalhes aqui: ${err.message}`
    )
    this.name = 'InternalServerError'
  }
}

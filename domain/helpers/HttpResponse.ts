class HttpRespose {
  private statusCode: Number = 200
  private data: any

  status(code: Number) {
    this.statusCode = code
    return this
  }

  json(data: any = '') {
    this.data = data

    return {
      statusCode: this.statusCode,
      data: this.data ?? '',
    }
  }
}

export default new HttpRespose()

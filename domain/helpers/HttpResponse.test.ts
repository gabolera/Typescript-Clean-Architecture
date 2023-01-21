import { describe, test, expect } from 'vitest'
import HttpResponse from './HttpResponse'

describe('HttpResponseTest', () => {
  test('Should 200 using json method with object props', () => {
    const sut = HttpResponse.json({ myProp: 'anyProp' })
    expect(sut.statusCode).toEqual(200)
    expect(sut.data).toEqual({ myProp: 'anyProp' })
  })

  test('Should 200 using json method with empty props', () => {
    const sut = HttpResponse.json()
    expect(sut.statusCode).toEqual(200)
    expect(sut.data).toEqual('')
  })

  test('Should 200 using json method with text props', () => {
    const sut = HttpResponse.json('my_text_test')
    expect(sut.statusCode).toEqual(200)
    expect(sut.data).toEqual('my_text_test')
  })

  test('Should 400 if change status method', () => {
    const sut = HttpResponse.status(400).json({})
    expect(sut.statusCode).toEqual(400)
  })
})

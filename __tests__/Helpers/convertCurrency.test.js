import { convertDecimalToReal } from "../../src/Helpers/convertCurrency"

describe('convertCurrency.js', () => {
  test('Should return undefined when not given a value ', () => {
    const transformCurrency = convertDecimalToReal()
    expect(transformCurrency).toBe(undefined)
  })
  test('Should transform decimal currency into BRL currency with "," ', () => {
    const transformCurrency = convertDecimalToReal(8.59)
    expect(transformCurrency).toMatch(/R\$\s8,59/)
  })
})
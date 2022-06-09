import { transformString } from "../../src/Helpers/transformString"

describe('transformString.js', () => {
  test('Should return empty string when not given a string', () => {
    const expectedStringOutput = ''
    const transform = transformString()
    expect(transform).toBe(expectedStringOutput)
  })
  test('Should transform string into lowerCase', () => {
    const expectedStringOutput = 'flavio'
    const transform = transformString('FlAvIO')
    expect(transform).toBe(expectedStringOutput)
  })
})
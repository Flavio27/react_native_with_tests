import { capitalizeString } from "../../src/Helpers/capitalizeString"

describe('capitalizeString.test.js', () => {
  test('Should return empty string when not given a string', () => {
    const expectedStringOutput = ''
    const capitalize = capitalizeString()
    expect(capitalize).toBe(expectedStringOutput)
  })
  test('Should capitalize a string', () => {
    const expectedStringOutput = 'Flavio'
    const capitalize = capitalizeString('flAViO')
    expect(capitalize).toBe(expectedStringOutput)
  })
})
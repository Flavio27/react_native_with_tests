import { api } from '../../src/Services/api'

jest.mock('../../src/Services/api')

const mockDb = {
  comments: [],
  posts: []
}

const mockGet = (response) => {
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve({
        data: response
      })
    }, 200);
  })
}

describe('api.js', () => {
  test('Should return a request', async () => {
    api.get.mockImplementation(() => mockGet(mockDb))
    const responseGet = await api.get()
    expect(responseGet.data).toEqual(mockDb)
  })
})
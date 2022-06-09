afterEach(() => {
  jest.clearAllMocks()
})


const mockPosts = {
  data: [
    { "id": 1, "name": "NAME 1" },
    { "id": 2, "name": "NAME 2" },
    { "id": 3, "name": "NAME 3" }
  ]
}

describe('getPosts.js', () => {
  test('Should return a list of posts', async () => {
    const mockGetPosts = jest.fn().mockResolvedValue(mockPosts)
    jest.mock('../../src/Services/getPosts', () => ({
      getPosts: () => mockGetPosts
    }))
  
    const responseGet = await mockGetPosts()
    expect(responseGet).toEqual(mockPosts)
  })
})
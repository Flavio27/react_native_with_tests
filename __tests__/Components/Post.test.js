import React from 'react'
import { render, screen, waitFor } from '@testing-library/react-native'
import PostList from '../../src/Components/PostList'

afterEach(() => {
  jest.clearAllMocks()
})

const mockPosts = {
  data: [
    { id: 1, name: 'NAME 1' },
    { id: 2, name: 'NAME 2' },
    { id: 3, name: 'NAME 3' },
  ],
}

const mockGetPosts = jest.fn().mockResolvedValue(mockPosts)
jest.mock('../../src/Services/getPosts', () => ({
  getPosts: () => mockGetPosts(),
}))

describe('PostList.jsx', () => {
  test('Should call getPosts on render', async () => {
    const { getByText, toJSON } = render(<PostList/>)

    await waitFor(() => {
      expect(mockGetPosts).toHaveBeenCalledTimes(1)
      // expect(getByText('Name 1')).toBeVisible()
      console.log(toJSON())
    })
  })
})

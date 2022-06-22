import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import PostList from '../../src/Components/PostList'
import { RecoilRoot } from 'recoil'
import { postListState } from '../../src/Storage/atoms'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import DetailsRoutes from '../../src/Routes/DetailsRoutes'

afterEach(() => {
  jest.clearAllMocks()
})

const mockPosts = {
  data: [
    { id: 1, name: 'NAME 1', description: 'Description test 1' },
    { id: 2, name: 'NAME 2', description: 'Description test 2' },
    { id: 3, name: 'NAME 3', description: 'Description test 3' },
  ],
}

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

const mockGetPosts = jest.fn().mockResolvedValue(mockPosts)
jest.mock('../../src/Services/getPosts', () => ({
  getPosts: () => mockGetPosts(),
}))

describe('PostList.jsx', () => {
  test('Should call getPosts on render', async () => {
    render(
      <RecoilRoot>
        <PostList/>
      </RecoilRoot>,
    )

    await waitFor(() => {
      expect(mockGetPosts).toHaveBeenCalledTimes(1)
    })
  })

  test('Should go to details screen when press on name', async () => {
    const Stack = createNativeStackNavigator()
    const { getByText } = render(
      <RecoilRoot initializeState={(snap) => snap.set(postListState, mockPosts.data)}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='PostList'>
            <Stack.Screen name='Personagens' component={PostList} />
            <Stack.Screen name='Detalhes' component={DetailsRoutes} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>,
    )

    await waitFor(() => {
      expect(getByText('Name 1')).toBeTruthy()
      fireEvent(getByText('Name 1'), 'press')
    })

    expect(getByText('Description test 1')).toBeTruthy()
  })
})

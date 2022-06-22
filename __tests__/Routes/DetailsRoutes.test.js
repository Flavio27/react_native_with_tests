import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'
import DetailsRoutes from '../../src/Routes/DetailsRoutes'
import { selectedPostState } from '../../src/Storage/atoms'

afterEach(() => {
  jest.clearAllMocks()
})

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

const mockSelectedPostState = {
  name: 'Name test',
  description: 'Description test',
  img: 'http://imgtest.test',
}

describe('DetailsRoutes.jsx', () => {
  const component = (
    <RecoilRoot initializeState={(snap) => snap.set(selectedPostState, mockSelectedPostState)}>
      <NavigationContainer>
        <DetailsRoutes/>
      </NavigationContainer>
    </RecoilRoot>
  )
  test('Should render a bottom tab navigator', async () => {
    const { findByText, getByText } = render(component)
    const about = await findByText('Sobre')
    const gallery = getByText('Galeria')

    expect(about).toBeTruthy()
    expect(gallery).toBeTruthy()
  })

  test('Should render tab "Sobre" by default on details Page', async () => {
    const { getByText } = render(component)
    const nameTitle = getByText('Name test')
    const description = getByText('Description test')

    expect(nameTitle).toBeTruthy()
    expect(description).toBeTruthy()
  })

  test('Should change tab when pressed', async () => {
    const { getByText, queryByText } = render(component)
    const gallery = getByText('Galeria')

    expect(queryByText('Galeria!')).toBe(null)
    expect(getByText('Name test')).toBeTruthy()
    expect(getByText('Description test')).toBeTruthy()

    fireEvent(gallery, 'press')
    expect(getByText('Galeria!')).toBeTruthy()
  })
})

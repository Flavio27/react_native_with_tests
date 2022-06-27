import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { toBeEmpty, toHaveTextContent } from '@testing-library/jest-native'
import { NavigationContainer } from '@react-navigation/native'
import { RecoilRoot } from 'recoil'
import DetailsRoutes from '../../src/Routes/DetailsRoutes'
import { selectedPostState } from '../../src/Storage/atoms'

expect.extend({ toBeEmpty, toHaveTextContent })

afterEach(() => {
  jest.clearAllMocks()
})

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

const mockSelectedPostState = {
  name: 'Name test',
  description: 'Description test',
  img: 'http://imgtest.test',
  gallery: ['http://imgGallery1.test'],
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
    const {
      getByText, queryByText, getByTestId,
    } = render(component)
    const gallery = getByText('Galeria')

    expect(queryByText('Galeria!')).toBe(null)
    expect(getByText('Name test')).toBeTruthy()
    expect(getByText('Description test')).toBeTruthy()

    fireEvent(gallery, 'press')
    expect(getByTestId(mockSelectedPostState.gallery[0]))
  })

  test('Should expand a photo of gallery when pressed', async () => {
    const {
      getByText, queryByText, getByTestId, queryByLabelText,
    } = render(component)
    const gallery = getByText('Galeria')

    expect(queryByText('Galeria!')).toBe(null)
    expect(getByText('Name test')).toBeTruthy()
    expect(getByText('Description test')).toBeTruthy()

    fireEvent(gallery, 'press')
    const photoGallery = getByTestId(mockSelectedPostState.gallery[0])

    expect(queryByLabelText('expandedPhoto')).toBe(null)
    fireEvent(photoGallery, 'press')

    expect(queryByLabelText('expandedPhoto')).toBeTruthy()
  })

  test('Should close expand a photo of gallery when pressed', async () => {
    const {
      getByText, queryByText, getByTestId, queryByLabelText,
    } = render(component)
    const gallery = getByText('Galeria')

    expect(queryByText('Galeria!')).toBe(null)
    expect(getByText('Name test')).toBeTruthy()
    expect(getByText('Description test')).toBeTruthy()

    fireEvent(gallery, 'press')
    const photoGallery = getByTestId(mockSelectedPostState.gallery[0])

    expect(queryByLabelText('expandedPhoto')).toBe(null)
    fireEvent(photoGallery, 'press')

    expect(queryByLabelText('expandedPhoto')).toBeTruthy()

    const expandedPhotoContainer = queryByLabelText('expandedPhotoContainer')
    fireEvent(expandedPhotoContainer, 'press')

    expect(queryByLabelText('expandedPhoto')).toBe(null)
  })
})

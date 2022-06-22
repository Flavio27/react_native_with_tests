import { render } from '@testing-library/react-native'
import App from '../App'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('App.jsx', () => {
  test('Should start APP in "Personagens"', () => {
    render(<App/>)
  })
})

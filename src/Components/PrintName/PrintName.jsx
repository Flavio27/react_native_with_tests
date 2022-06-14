import { Text } from 'react-native'
import { useRecoilValue } from 'recoil'
import { postNameState } from '../../Storage/atoms'
import { upperPostName } from '../../Storage/selectors'

export default () => {
  const name = useRecoilValue(postNameState)
  const nameUpper = useRecoilValue(upperPostName)

  return (
    <>
      <Text>without selector: {name}</Text>
      <Text>with selector: {nameUpper}</Text>
    </>
  )
}

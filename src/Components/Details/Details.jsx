import { Text } from 'react-native'
import { useRecoilValue } from 'recoil'
import { selectedPostState } from '../../Storage/atoms'

export default () => {
  const details = useRecoilValue(selectedPostState)

  return (
    <>
      <Text>Name: {details?.name}</Text>
      <Text>Description: {details.description}</Text>
    </>
  )
}

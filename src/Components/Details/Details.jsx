import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useRecoilValue } from 'recoil'
import { selectedPostState } from '../../Storage/atoms'
import * as S from './Details.styles'

export default () => {
  const details = useRecoilValue(selectedPostState)
  const Tab = createBottomTabNavigator()
  return (
    <S.Container>
      <S.Name>{details?.name}</S.Name>
      <S.Photo
        source={{ uri: details?.img }}
      />
      <S.DescriptionContainer>
        <S.Description>{details?.description}</S.Description>
      </S.DescriptionContainer>
    </S.Container>
  )
}

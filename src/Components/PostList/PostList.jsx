import { useCallback, useEffect } from 'react'
import { FlatList } from 'react-native'
import { useRecoilState } from 'recoil'
import { capitalizeString } from '../../Helpers/capitalizeString'
import { getPosts } from '../../Services/getPosts'
import { postListState, selectedPostState } from '../../Storage/atoms'
import * as S from './PostList.styles'

export default ({ navigation }) => {
  const [postList, setPostList] = useRecoilState(postListState)
  const [, setPostedSelected] = useRecoilState(selectedPostState)

  const handlePostClick = (item) => {
    setPostedSelected(item)
    navigation.navigate('Detalhes')
  }
  const getPost = async () => {
    const posts = await getPosts()
    setPostList(posts)
  }

  useEffect(() => {
    getPost()
  }, [])

  const renderPost = useCallback(
    ({ item }) => (
      <S.postCard onPress={() => { handlePostClick(item) }}>
        <S.postText>{capitalizeString(item?.name)}</S.postText>
      </S.postCard>
    ),
    [],
  )

  const keyExtractor = useCallback((post) => post.id.toString(), [])

  return (
    <S.Container>
      <FlatList
        data={postList}
        renderItem={renderPost}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      />
    </S.Container>
  )
}

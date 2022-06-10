import { useCallback, useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import { useRecoilState } from 'recoil'
import { capitalizeString } from '../../Helpers/capitalizeString'
import { getPosts } from '../../Services/getPosts'
import { postListState, postNameState } from '../../Storage/atoms'
import PrintName from '../PrintName'
import * as S from './PostList.styles'

export default () => {
  const [postList, setPostList] = useRecoilState(postListState)
  const [_, setName] = useRecoilState(postNameState)

  const getPost = async () => {
    const posts = await getPosts()
    setPostList(posts)
  }

  useEffect(() => {
    getPost()
  }, [])

  const renderPost = useCallback(
    ({ item }) => <S.Post>ID: {item.id} - Name: {capitalizeString(item?.name)}</S.Post>,
    [],
  )

  const keyExtractor = useCallback((post) => post.id.toString(), [])

  return (
    <S.Container>
      <FlatList
        data={postList}
        renderItem={renderPost}
        keyExtractor={keyExtractor}

      />
      <S.SearchNameInput
        onChangeText={setName}
        placeholder='search name...'
      />
      <PrintName/>
    </S.Container>
  )
}

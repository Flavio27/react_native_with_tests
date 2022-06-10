import React, { useState, useEffect, useCallback } from 'react'
import {
  View, Text, Button, FlatList,
} from 'react-native'
import { capitalizeString } from '../../Helpers/capitalizeString'
import { getPosts } from '../../Services/getPosts'
import * as S from './PostList.styles'

export default () => {
  const [post, setPost] = useState([])

  const getPost = async () => {
    const posts = await getPosts()
    setPost(posts)
  }

  useEffect(() => {
    getPost()
  }, [])

  const renderPost = useCallback(
    ({ item }) => <Text>ID: {item.id} - Name: {capitalizeString(item?.name)}</Text>,
    [],
  )

  const keyExtractor = useCallback((post) => post.id.toString(), [])

  return (
    <View>
      <FlatList
        data={post}
        renderItem={renderPost}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

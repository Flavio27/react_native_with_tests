import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
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

  return (
    <View>
      {post.map(({ id, name }) => (
        <S.PostList key={name}>
          <Text>ID: {id} - Name: {capitalizeString(name)}</Text>
        </S.PostList>
      ))}
    </View>
  )
}

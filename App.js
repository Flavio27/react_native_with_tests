import React from 'react'
import { StyleSheet, View } from 'react-native'
import PostList from './src/Components/PostList/PostList'
import { RecoilRoot } from 'recoil'

export default function App() {
  return (
    <View style={styles.container}>
      <RecoilRoot>
        <PostList/>
      </RecoilRoot>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

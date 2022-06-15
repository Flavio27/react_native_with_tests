import React from 'react'
import { StyleSheet, View } from 'react-native'
import PostList from './src/Components/PostList'
import Details from './src/Components/Details'
import { RecoilRoot } from 'recoil'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='PostList'>
          <Stack.Screen name='PostList' component={PostList} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
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

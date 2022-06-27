import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PostList from '../Components/PostList'
import DetailsRoutes from './DetailsRoutes'

const AppRoutes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Personagens'>
        <Stack.Screen name='Personagens' component={PostList} />
        <Stack.Screen name='Detalhes' component={DetailsRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes

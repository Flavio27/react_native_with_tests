import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import Details from '../Components/Details'

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}
const DetailsRoutes = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen name='Descrição' component={Details} options={{ headerShown: false }}/>
      <Tab.Screen name='Fotos' component={SettingsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

export default DetailsRoutes

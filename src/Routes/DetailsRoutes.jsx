import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Details from '../Components/Details'

const icon = ({
  name, size, color, focused,
}) => (
  <Ionicons name={name} size={size} color={color} focused={focused}/>
)

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Galeria!</Text>
    </View>
  )
}
const DetailsRoutes = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        display: getFocusedRouteNameFromRoute(route),
      })}
    >
      <Tab.Screen
        name='Sobre'
        component={Details}
        options={{
          headerShown: false,
          tabBarIcon: (props) => icon({ ...props, name: 'reader-outline' }),
        }}
      />
      <Tab.Screen
        name='Galeria'
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => icon({ ...props, name: 'images-outline' }),
        }}
      />
    </Tab.Navigator>
  )
}

export default DetailsRoutes

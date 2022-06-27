import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Details from '../Components/Details'
import Gallery from '../Components/Gallery/Gallery'

const icon = ({
  name, size, color, focused,
}) => (
  <Ionicons name={name} size={size} color={color} focused={focused}/>
)

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
        component={Gallery}
        options={{
          headerShown: false,
          tabBarIcon: (props) => icon({ ...props, name: 'images-outline' }),
        }}
      />
    </Tab.Navigator>
  )
}

export default DetailsRoutes

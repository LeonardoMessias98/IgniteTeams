import { createNativeStackNavigator} from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();

import Groups from '@screens/Groups'

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Groups} options={{headerShown: false}}/>
    </Navigator>
  )
}
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();

import {NewGroup} from '@screens/NewGroup';

export function AppRoutes() {
  return (
    <Navigator>
      {/* <Screen name="home" component={Groups} options={{headerShown: false}}/> */}
      <Screen
        name="new-group"
        component={NewGroup}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}

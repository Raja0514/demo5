import Tabscreen1 from '../screen1/Tabscreen1';
import Tabscreen2 from '../screen2/Tabscreen2';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Tabscreen1}
        options={{
          headerShown: false,

          tabBarLabel: 'METS TRUCK PLOD',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="truck-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Tabscreen2}
        options={{
          headerShown: false,

          tabBarLabel: 'JUMPO PLOD',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="truck-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

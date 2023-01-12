import Home from '../screen1/Home';
import Profile from '../screen2/Profile';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Appstack() {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
      </Stack.Navigator>
    </>
  );
}

export default Appstack;

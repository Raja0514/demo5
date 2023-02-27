import {createDrawerNavigator} from '@react-navigation/drawer';

import Metstruckplod from '../pages/Metstruckplod';

import CategeoryAfault from '../pages/CategeoryAfault';

import CategeoryBfault from '../pages/CategeoryBfault';

import CategeoryCfault from '../pages/CategeoryCfault ';

import Loadinglocations from '../pages/Loadinglocations';

import Numberofloads from '../pages/Numberofloads';

import Activitysheet from '../pages/Activitysheet';

import Developmentdrilling from '../pages/Developmentdrilling';

import Consumables from '../pages/Consumables';

import Test from '../pages/Test';

import Drawerscreen1 from '../screen1/Drawerscreen1';

import Sidebar from '../screen1/Sidebar';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <>
      <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
        <Drawer.Screen
          name=" Live Mining"
          component={Drawerscreen1}
          options={{headerShown: true}}
        />
        <Drawer.Screen
          name="Metstruckplod"
          component={Metstruckplod}
          options={{headerShown: true}}
        />
        <Drawer.Screen
          name="CategeoryAfault"
          component={CategeoryAfault}
          options={{
            headerShown: true,
           

            
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Drawer.Screen
          name="CategeoryBfault"
          component={CategeoryBfault}
          options={{headerShown: true}}
        />

        <Drawer.Screen
          name="CategeoryCfault"
          component={CategeoryCfault}
          options={{headerShown: true}}
        />
        <Drawer.Screen
          name="Loadinglocations"
          component={Loadinglocations}
          options={{headerShown: true}}
        />
        <Drawer.Screen
          name="Numberofloads"
          component={Numberofloads}
          options={{headerShown: true}}
        />
        <Drawer.Screen
          name="Activitysheet"
          component={Activitysheet}
          options={{headerShown: true}}
        />
        <Drawer.Screen
          name="Developmentdrilling"
          component={Developmentdrilling}
          options={{headerShown: true}}
        />
        <Drawer.Screen
          name="Consumables"
          component={Consumables}
          options={{headerShown: true}}
        />
        <Drawer.Screen
          name="Test"
          component={Test}
          options={{headerShown: true}}
        />
      </Drawer.Navigator>
    </>
  );
}

export default MyDrawer;

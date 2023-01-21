import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

const Sidebar = props => {
  return (
    <>
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.container}>
            <View style={[styles.userinfo, {flexDirection: 'row'}]}>
              <View style={{marginTop: 15,marginLeft:10}}>
                <Avatar.Image source={require('../Images/user.jpg')} />
              </View>

              <View style={{marginLeft: 10, marginTop: 15}}>
                <Title style={styles.title}>Gian Frango</Title>

                <Caption style={styles.title}>METS-Truck Operator</Caption>
              </View>
            </View>

            <Drawer.Section style={{marginTop: 15}}>
              <DrawerItem
                label="METS TRUCK PLOD"
                onPress={() => props.navigation.navigate('Metstruckplod')}
              />
              <DrawerItem
                label="PRESTART"
                onPress={() => props.navigation.navigate('CategeoryAfault')}
              />
              {/* <DrawerItem
                label="CATEGEROY B FAULTS"
                onPress={() => props.navigation.navigate('CategeoryBfault')}
              />
              <DrawerItem
                label="CATEGEROY C FAULTS"
                onPress={() => props.navigation.navigate('CategeoryCfault')}
              /> */}
              <DrawerItem
                label="LOADING_LOCATIONS"
                onPress={() => props.navigation.navigate('Loadinglocations')}
              />
              <DrawerItem
              
              label="NUMBER OF LOADS"

              onPress={()=>props.navigation.navigate('Numberofloads')}
              
              />
              <DrawerItem
              
              label="ACTIVITYSHEET"

              onPress={()=>props.navigation.navigate('Activitysheet')}
              
              />
               <DrawerItem
              
              label="DEVELOPMENTDRILLING"

              onPress={()=>props.navigation.navigate('Developmentdrilling')}
              
              />
              <DrawerItem
              
              label="CONSUMABLES"

              onPress={()=>props.navigation.navigate('Consumables')}
              
              />
            </Drawer.Section>
            <Drawer.Section title="Prefernces">
              <TouchableRipple>
                <View style={styles.prefernces}>
                  <Text>Dark Mode</Text>
                  <Switch />
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>

        {/* Logout */}

        <Drawer.Section style={styles.bottomDrawer}>
          <Drawer.Item label="Sign Out " onPress={() => {}} />
        </Drawer.Section>
      </View>
    </>
  );
};
export default Sidebar;

const styles = StyleSheet.create({
  container: {},
  userinfo: {},
  title: {},
  bottomDrawer: {
    marginBottom: 15,
  },
  prefernces: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Button } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabscreen1 = ({navigation}) => {
  return (
    <>
      <View style={{flex:1}}>
        {/* <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            elevation: 3,
            backgroundColor: '#fff',
          }}> */}
        {/* <TouchableOpacity
            style={{marginLeft: 15}}
            onPress={() => {
              navigation.openDrawer();
            }}>
            <MaterialCommunityIcons name="menu" color="red" size={26} />
          </TouchableOpacity> */}
        {/* </View> */}

        <ImageBackground
          source={require('../Images/home.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <View
            style={{flex: 1, justifyContent: 'center'}}>
              
            {/* <Button onPress={navigation.openDrawer()}  style={{margin: 5, padding: 5}} mode="contained">
              METS TRUCK PLOD
            </Button>

            <Button style={{margin: 5, padding: 5}} mode="contained">
              JUMPO PLOD
            </Button> */}
            <Text style={styles.text}>Live Mining</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Tabscreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.9,
  },
  text: {
    color: '#DEEFE7',
    fontSize: 60,
    lineHeight: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

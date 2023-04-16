import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Button} from 'react-native-paper';

const Tabscreen1 = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#2c2c54',
          }}>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Metstruckplod')}
            textColor="white"
            style={{margin: 20}}>
            METS TRUCK PLOD
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('CategeoryAfault')}
            textColor="white"
            style={{margin: 20}}>
            PRESTART
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Loadinglocations')}
            textColor="white"
            style={{margin: 20}}>
            LOADING LOCATIONS
          </Button>

          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Numberofloads')}
            textColor="white"
            style={{margin: 20}}>
            NUMBER OF LOADS
          </Button>

          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Activitysheet')}
            textColor="white"
            style={{margin: 20}}>
            ACTIVITYSHEET
          </Button>
        </View>
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
    fontSize: 40,

    fontWeight: 'bold',
    textAlign: 'center',
  },
});

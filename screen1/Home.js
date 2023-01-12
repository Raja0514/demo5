import React, {useEffect} from 'react';

import {Text, View, StyleSheet} from 'react-native';

import { ActivityIndicator, MD2Colors } from 'react-native-paper';


function Home({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Profile');
    }, 3000);
  }, []);

  return (
    <>
      <View style={styles.container}>
      <ActivityIndicator animating={true} color={'#B4BEC9'} size={'large'} />

      </View>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#159A9C',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});

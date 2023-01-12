import React from 'react';

import {View, Text,StyleSheet} from 'react-native';

const Tabscreen2 = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
      </View>
    </>
  );
};

export default Tabscreen2;

const styles=StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   
  },
  text:{
    fontSize:30,
    
  }

})

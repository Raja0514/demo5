import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Drawerscreen2 = () => {
  return (
    <>
      <View style={styles.conatiner}>
        <Text style={styles.text}>Drawerscreen2</Text>
      </View>
    </>
  );
};

export default Drawerscreen2;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 40,
    color: 'white',
    
  },
});

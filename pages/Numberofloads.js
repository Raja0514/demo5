import React from 'react';

import {Text, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
const Numberofloads = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center',alignItems:'center',backgroundColor:'#2c2c54'}}>
        <Text style={{textAlign: 'center', margin: 20,fontSize:30,color:'white'}}>
          Loads : {counter}
        </Text>
        
        <View>
          <Button
            style={{marginBottom: 20}}
            mode="elevated"
            onPress={() => {
              setCounter(counter + 1);
            }}>
            +
          </Button>
          <Button
            style={{marginBottom: 20}}
            mode="elevated"
            onPress={() => {
              setCounter(0);
            }}>
            Reset
          </Button>
          <Button
            style={{marginBottom: 20,fontSize:20}}
            mode="elevated"
            
            onPress={() => {
              if (counter > 0) setCounter(counter - 1);
            }}>
            -
          </Button>
          <Button
            style={{marginBottom: 20}}
            mode="elevated"
            onPress={() => {
              alert('Loads Submitted')
            }}>
            Submit
          </Button>
        </View>
      </View>
    </>
  );
};

export default Numberofloads;

const styels = StyleSheet.create({});

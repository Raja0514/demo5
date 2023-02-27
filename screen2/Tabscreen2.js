import React from 'react';

import {View, Text,StyleSheet,ImageBackground} from 'react-native';

import {Button} from 'react-native-paper';

const Tabscreen2 = ({navigation}) => {
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

        
          <View
            style={{flex: 1, justifyContent: 'center',backgroundColor:'#2c2c54'}}>
              
            {/* <Button onPress={navigation.openDrawer()}  style={{margin: 5, padding: 5}} mode="contained">
              METS TRUCK PLOD
            </Button>

            <Button style={{margin: 5, padding: 5}} mode="contained">
              JUMPO PLOD
            </Button> */}
         
            
             
           

            <Button mode='outlined'  textColor='white'  onPress={() => navigation.navigate('Developmentdrilling')}  style={{margin:20}}>DEVELOPMENTDRILLING</Button>

            <Button mode='outlined' textColor='white'  onPress={() => navigation.navigate('Consumables')}  style={{margin:20}}>CONSUMABLES</Button>
            
          </View>
        
      </View>
    </>
  );
};

export default Tabscreen2;

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


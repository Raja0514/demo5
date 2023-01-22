import * as React from 'react';
import {Text, View,Alert,ScrollView} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import {
  Appbar,
  Provider,
  Surface,
  ThemeProvider,
  Button,
} from 'react-native-paper';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
const CategeoryCfault = ({navigation}) => {
  const [text, setText] = React.useState('');

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(false);


  const insertvalue = () => {
    return Alert.alert('Prestart Fault Value Submitted.....');
  };

  return (
    <>
      <Surface style={styles.containerStyle}>
        <SafeAreaView style={styles.safeContainerStyle}>
          <ScrollView>

          
          <View style={styles.Container}>
            <View style={styles.row}>
              <Checkbox
                style={{margin: 10}}
                status={checked1 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked1(!checked1);
                }}
              />

              <Text>Minor Oil Leaks </Text>

              <Checkbox
                style={{margin: 10}}
                status={checked2 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked2(!checked2);
                }}
              />
              <Text>Wipers/Washers </Text>
            </View>

            <View style={styles.row}>
              <Checkbox
                style={{margin: 10}}
                status={checked3 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked3(!checked3);
                }}
              />
              <Text>First Aid Kit </Text>
              <Checkbox
                status={checked4 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked4(!checked4);
                }}
              />
              <Text>Damage</Text>
            </View>

            <View style={styles.row}>
              <Checkbox
                style={{margin: 10}}
                status={checked5 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked5(!checked5);
                }}
              />
              <Text>Vehicle Housekeeping </Text>
              <Checkbox
                style={{margin: 10}}
                status={checked6 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked6(!checked6);
                }}
              />
              <Text>Air conditioner </Text>

              <Checkbox
                style={{margin: 10}}
                status={checked7 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked7(!checked7);
                }}
              />
              <Text>Fuel Level </Text>
            </View>
          </View>
          <View style={styles.spacerStyle} />
          <View style={styles.spacerStyle} />
          <View style={styles.spacerStyle} />
          <TextInput
            mode="outlined"
            multiline
            label="Type your Actions......"
            value={text}
            onChangeText={text => setText(text)}></TextInput>
          <View style={styles.spacerStyle} />
          <View style={styles.spacerStyle} />
          <Button
            uppercase={true}
            mode="outlined"
            textColor={'black'}
            style={{margin: 10}}
            onPress={() => navigation.navigate('CategeoryBfault')}>
            Previous
          </Button>
          <View style={styles.spacerStyle} />
          
          <Button
            uppercase={true}
            mode="outlined"
            textColor={'black'}
            style={{margin: 10}}
            onPress={insertvalue}>
            Submit
          </Button>
          </ScrollView>
        </SafeAreaView>
      </Surface>
    </>
  );
};

export default CategeoryCfault;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,

    backgroundColor: '#002333',
  },
  safeContainerStyle: {
    flex: 1,
    marginTop: 20,
    margin: 20,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  spacerStyle: {
    marginBottom: 15,
  },
});

import * as React from 'react';
import {Text, View, Alert, ScrollView} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import {Surface, Button} from 'react-native-paper';

import {SafeAreaView, StyleSheet} from 'react-native';
const CategeoryCfault = ({navigation}) => {
  const [text, setText] = React.useState('');

  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const [checked3, setChecked3] = React.useState(true);
  const [checked4, setChecked4] = React.useState(true);
  const [checked5, setChecked5] = React.useState(true);
  const [checked6, setChecked6] = React.useState(true);
  const [checked7, setChecked7] = React.useState(true);

  const testingarray = [];
  console.log('testingarray');

  const Click = () => {
    console.log('clicking');

    if (checked1 === true) {
      testingarray.push('testing');
    }
  };

  console.log(testingarray);

  return (
    <>
      <Surface style={styles.containerStyle}>
        <SafeAreaView style={styles.safeContainerStyle}>
          <ScrollView>
            <View style={styles.Container}>
              <View style={styles.row}>
                <Checkbox
                  style={{margin: 10}}
                  status={checked1 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked1(!checked1);
                  }}
                  uncheckedColor="red"
                  color="green"
                />

                <Text>Minor Oil Leaks </Text>

                <Checkbox
                  style={{margin: 10}}
                  status={checked2 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked2(!checked2);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Wipers/Washers </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{margin: 10}}
                  status={checked3 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked3(!checked3);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>First Aid Kit </Text>
                <Checkbox
                  status={checked4 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked4(!checked4);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Damage</Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  style={{margin: 10}}
                  status={checked5 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked5(!checked5);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Vehicle Housekeeping </Text>
                <Checkbox
                  style={{margin: 10}}
                  status={checked6 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked6(!checked6);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Air conditioner </Text>

                <Checkbox
                  style={{margin: 10}}
                  status={checked7 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked7(!checked7);
                  }}
                  uncheckedColor="red"
                  color="green"
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
              style={{margin: 10, padding: 5}}
              onChangeText={text => setText(text)}></TextInput>
            <View style={styles.spacerStyle} />
            <View style={styles.spacerStyle} />

            <Button
              uppercase={true}
              mode="outlined"
              textColor={'black'}
              style={{margin: 10, padding: 5}}
              onPress={Click}>
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
    justifyContent: 'center',
    backgroundColor: '#2c2c54',
  },
  safeContainerStyle: {
    marginTop: 20,
    margin: 10,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 40,
  },
  Container: {},
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  spacerStyle: {
    marginBottom: 15,
  },
});

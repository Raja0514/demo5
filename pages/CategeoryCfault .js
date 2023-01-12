import * as React from 'react';
import {Text, View} from 'react-native';
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

  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <Surface style={styles.containerStyle}>
        <SafeAreaView style={styles.safeContainerStyle}>
          <View style={styles.Container}>
            <View style={styles.row}>
              <Checkbox
                style={{margin: 10}}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />

              <Text>Minor Oil Leaks </Text>

              <Checkbox
                style={{margin: 10}}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text>Wipers/Washers </Text>
            </View>

            <View style={styles.row}>
              <Checkbox
                style={{margin: 10}}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text>First Aid Kit </Text>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text>Damage</Text>
            </View>

            <View style={styles.row}>
              <Checkbox
                style={{margin: 10}}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text>Vehicle Housekeeping </Text>
              <Checkbox
                style={{margin: 10}}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text>Air conditioner </Text>

              <Checkbox
                style={{margin: 10}}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text>Fuel Level </Text>
            </View>
          </View>

          <TextInput
            mode="outlined"
            multiline
            label="Type your Actions......"
            value={text}
            onChangeText={text => setText(text)}></TextInput>
          <View style={styles.spacerStyle} />
          <Button
            uppercase={true}
            mode="outlined"
            textColor={'black'}
            style={{margin: 10}}
            onPress={() => navigation.navigate('CategeoryBfault')}>
            Previous
          </Button>
          <Button
            uppercase={true}
            mode="outlined"
            textColor={'black'}
            style={{margin: 10}}>
            Submit
          </Button>
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
    flex: 0.7,
    marginTop: 20,
    margin: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
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

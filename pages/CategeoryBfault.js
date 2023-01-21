import * as React from 'react';
import {Text, View} from 'react-native';
import {Checkbox,TextInput} from 'react-native-paper';
import {
  Appbar,
  Provider,
  Surface,
  ThemeProvider,
  Button,
} from 'react-native-paper';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
const CategeoryBfault = ({navigation}) => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [text, setText] = React.useState("");


  return (
    <Provider>
      <ThemeProvider>
        <Surface style={styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
            <View style={styles.Container}>
              <View style={styles.row}>
                <Checkbox
                  status={checked1 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked1(!checked1);
                  }}
                />

                <Text>Gauges & Warning lights </Text>

                <Checkbox
                  status={checked2 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked2(!checked2);
                  }}
                />
                <Text>Mirrors </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked3 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked3(!checked3);
                  }}
                />
                <Text>Drive Belt Tensions </Text>
                <Checkbox
                  status={checked4 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked4(!checked4);
                  }}
                />
                <Text>Water Leaks </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked5 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked5(!checked5);
                  }}
                />
                <Text>Major Oil Leaks </Text>
                <Checkbox
                  status={checked6 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked6(!checked6);
                  }}
                />
                <Text>Tyre Condition </Text>
              </View>
            </View>
            <View style={styles.spacerStyle} />

            <TextInput
              label="Enter Your Actions...."
              value={text}
              onChangeText={text => setText(text)}
              mode="outlined"
            />
             <View style={styles.spacerStyle} />
            <Button
              mode="outlined"
              textColor={'black'}
              style={{margin: 10}}
              uppercase={true}
              onPress={() => navigation.navigate('CategeoryAfault')}>
              Previous
            </Button>
            <Button
              mode="outlined"
              textColor={'black'}
              style={{margin: 10}}
              uppercase={true}
              onPress={() => navigation.navigate('CategeoryCfault')}>
              Next
            </Button>
          </SafeAreaView>
        </Surface>
      </ThemeProvider>
    </Provider>
  );
};

export default CategeoryBfault;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,

    backgroundColor: '#002333',
  },
  safeContainerStyle: {
    flex: 0.5,
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

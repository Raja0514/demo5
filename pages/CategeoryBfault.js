import * as React from 'react';
import {
  Surface,
  Button,
  TextInput,
  Provider,
  ThemeProvider,
  Checkbox,
} from 'react-native-paper';

import {SafeAreaView, StyleSheet, ScrollView, Text, View} from 'react-native';

const CategeoryBfault = () => {
  
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const [checked3, setChecked3] = React.useState(true);
  const [checked4, setChecked4] = React.useState(true);
  const [checked5, setChecked5] = React.useState(true);
  const [checked6, setChecked6] = React.useState(true);
  const [text, setText] = React.useState('');

  return (
    <Provider>
      <ThemeProvider>
        <Surface style={styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
            <ScrollView>
              <View style={styles.Container}>
                <View style={styles.row}>
                  <Checkbox
                    status={checked1 ? 'checked' : 'indeterminate'}
                    onPress={() => {
                      setChecked1(!checked1);
                    }}
                    uncheckedColor="red"
                    color="green"
                  />

                  <Text>Gauges & Warning lights </Text>

                  <Checkbox
                    status={checked2 ? 'checked' : 'indeterminate'}
                    onPress={() => {
                      setChecked2(!checked2);
                    }}
                    uncheckedColor="red"
                    color="green"
                  />
                  <Text>Mirrors </Text>
                </View>

                <View style={styles.row}>
                  <Checkbox
                    status={checked3 ? 'checked' : 'indeterminate'}
                    onPress={() => {
                      setChecked3(!checked3);
                    }}
                    uncheckedColor="red"
                    color="green"
                  />
                  <Text>Drive Belt Tensions </Text>
                  <Checkbox
                    status={checked4 ? 'checked' : 'indeterminate'}
                    onPress={() => {
                      setChecked4(!checked4);
                    }}
                    uncheckedColor="red"
                    color="green"
                  />
                  <Text>Water Leaks </Text>
                </View>

                <View style={styles.row}>
                  <Checkbox
                    status={checked5 ? 'checked' : 'indeterminate'}
                    onPress={() => {
                      setChecked5(!checked5);
                    }}
                    uncheckedColor="red"
                    color="green"
                  />
                  <Text>Tyre Condition </Text>
                  <Checkbox
                    status={checked6 ? 'checked' : 'indeterminate'}
                    onPress={() => {
                      setChecked6(!checked6);
                    }}
                    uncheckedColor="red"
                    color="green"
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
                style={{margin: 10, padding: 5}}
              />
              <View style={styles.spacerStyle} />
              <View style={styles.spacerStyle} />

              <Button
                mode="outlined"
                style={{margin: 10, padding: 5}}
                uppercase={true}>
                Submit
              </Button>
            </ScrollView>
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

    backgroundColor: '#2c2c54',
    justifyContent: 'center',
  },
  safeContainerStyle: {
    marginTop: 20,
    margin: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  spacerStyle: {
    marginBottom: 15,
  },
  textcolor: {
    color: 'white',
  },
  buttoncolor: {
    backgroundColor: '#706fd3',
  },
});

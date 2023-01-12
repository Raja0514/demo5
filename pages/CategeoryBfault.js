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
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = React.useState("");


  return (
    <Provider>
      <ThemeProvider>
        <Surface style={styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
            <View style={styles.Container}>
              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

                <Text>Gauges & Warning lights </Text>

                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Mirrors </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Drive Belt Tensions </Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Water Leaks </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Major Oil Leaks </Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
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

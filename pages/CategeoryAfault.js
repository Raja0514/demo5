import * as React from 'react';
import {Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {Surface, Button,TextInput} from 'react-native-paper';

import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

const CategeoryAfault = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = React.useState("");

  return (
    <>
      <Surface style={styles.containerStyle}>
        <SafeAreaView style={styles.safeContainerStyle}>
          <ScrollView>
            <View style={styles.Container}>
              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Engine Oil level</Text>

                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Engine Coolant Level </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Power Steering Fluid Level </Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Fuel Leaks </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Fire Extinguisher </Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Locking Pins on Tray </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Steering</Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Tyre Rims, Wheel Nuts </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Seat Belts </Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Flag (Opencut only) </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Foot Brake </Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Park Brake </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Hom</Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Brake & Indicator Lights </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Lights</Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Flashing light </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>Reversing Alarm </Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text>2-Way radio </Text>
              </View>
            </View>

            <View style={styles.spacerStyle} />

            <TextInput
              label="Enter Your Actions...."
              value={text}
              onChangeText={text => setText(text)}
              mode="outlined"
            />
           
            <Button
              mode="outlined"
              uppercase={true}
              textColor={'black'}
              style={{marginTop: 40}}
              onPress={() =>
                navigation.navigate('CategeoryBfault')
              }
              
              >
              Next
            </Button>
          </ScrollView>
        </SafeAreaView>
      </Surface>
    </>
  );
};

export default CategeoryAfault;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,

    backgroundColor: '#002333',
  },
  safeContainerStyle: {
    flex: 1,
    marginTop: 50,
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

import React, {useState, useEffect} from 'react';

import {Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {Surface, Button, TextInput} from 'react-native-paper';

import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

const CategeoryAfault = ({navigation}) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);
  const [checked10, setChecked10] = useState(false);
  const [checked11, setChecked11] = useState(false);
  const [checked12, setChecked12] = useState(false);
  const [checked13, setChecked13] = useState(false);
  const [checked14, setChecked14] = useState(false);
  const [checked15, setChecked15] = useState(false);
  const [checked16, setChecked16] = useState(false);
  const [checked17, setChecked17] = useState(false);
  const [checked18, setChecked18] = useState(false);

  const [text, setText] = useState('');

  return (
    <>
      <Surface style={styles.containerStyle}>
        <SafeAreaView style={styles.safeContainerStyle}>
          <ScrollView>
            <View style={styles.Container}>
              <View style={styles.row}>
                <Checkbox
                  status={checked1 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked1(!checked1);
                  }}
                />
                <Text>Engine Oil level</Text>

                <Checkbox
                  status={checked2 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked2(!checked2);
                  }}
                />
                <Text>Engine Coolant Level </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked3 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked3(!checked3);
                  }}
                />
                <Text>Power Steering Fluid Level </Text>
                <Checkbox
                  status={checked18 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked18(!checked18);
                  }}
                />
                <Text>Fuel Leaks </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked4 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked4(!checked4);
                  }}
                />
                <Text>Fire Extinguisher </Text>
                <Checkbox
                  status={checked5 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked5(!checked5);
                  }}
                />
                <Text>Locking Pins on Tray </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked6 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked6(!checked6);
                  }}
                />
                <Text>Steering</Text>
                <Checkbox
                  status={checked7 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked7(!checked7);
                  }}
                />
                <Text>Tyre Rims, Wheel Nuts </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked8 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked8(!checked8);
                  }}
                />
                <Text>Seat Belts </Text>
                <Checkbox
                  status={checked9 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked9(!checked9);
                  }}
                />
                <Text>Flag (Opencut only) </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked10 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked10(!checked10);
                  }}
                />
                <Text>Foot Brake </Text>
                <Checkbox
                  status={checked11 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked11(!checked11);
                  }}
                />
                <Text>Park Brake </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked12 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked12(!checked12);
                  }}
                />
                <Text>Hom</Text>
                <Checkbox
                  status={checked13 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked13(!checked13);
                  }}
                />
                <Text>Brake & Indicator Lights </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked14 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked14(!checked14);
                  }}
                />
                <Text>Lights</Text>
                <Checkbox
                  status={checked15 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked15(!checked15);
                  }}
                />
                <Text>Flashing light </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked16 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked16(!checked16);
                  }}
                />
                <Text>Reversing Alarm </Text>

                <Checkbox
                  status={checked17 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked17(!checked17);
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
            <View style={styles.spacerStyle} />

            <View style={styles.spacerStyle} />

            <Button
              mode="outlined"
              textColor={'black'}
              style={{margin: 10}}
              uppercase={true}
              onPress={() => navigation.navigate('CategeoryBfault')}>
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

import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {Surface, Button, TextInput} from 'react-native-paper';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

const CategeoryAfault = ({navigation}) => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);
  const [checked5, setChecked5] = useState(true);
  const [checked6, setChecked6] = useState(true);
  const [checked7, setChecked7] = useState(true);
  const [checked8, setChecked8] = useState(true);
  const [checked9, setChecked9] = useState(true);
  const [checked10, setChecked10] = useState(true);
  const [checked11, setChecked11] = useState(true);
  const [checked12, setChecked12] = useState(true);
  const [checked13, setChecked13] = useState(true);
  const [checked14, setChecked14] = useState(true);
  const [checked15, setChecked15] = useState(true);
  const [checked16, setChecked16] = useState(true);
  const [checked17, setChecked17] = useState(true);
  const [checked18, setChecked18] = useState(true);

  const [text, setText] = useState('');

  return (
    <>
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
                <Text>Engine Oil level</Text>

                <Checkbox
                  status={checked2 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked2(!checked2);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Engine Coolant Level </Text>
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
                <Text>Power Steering Fluid Level </Text>
                <Checkbox
                  status={checked18 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked18(!checked18);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Fuel Leaks </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked4 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked4(!checked4);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Fire Extinguisher </Text>
                <Checkbox
                  status={checked5 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked5(!checked5);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Locking Pins on Tray </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked6 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked6(!checked6);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Steering</Text>
                <Checkbox
                  status={checked7 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked7(!checked7);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Tyre Rims, Wheel Nuts </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked8 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked8(!checked8);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Seat Belts </Text>
                <Checkbox
                  status={checked9 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked9(!checked9);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Flag (Opencut only) </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked10 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked10(!checked10);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Foot Brake </Text>
                <Checkbox
                  status={checked11 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked11(!checked11);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Park Brake </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked12 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked12(!checked12);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Hom</Text>
                <Checkbox
                  status={checked13 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked13(!checked13);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Brake & Indicator Lights </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked14 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked14(!checked14);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Lights</Text>
                <Checkbox
                  status={checked15 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked15(!checked15);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Flashing light </Text>
              </View>

              <View style={styles.row}>
                <Checkbox
                  status={checked16 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked16(!checked16);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>Reversing Alarm </Text>

                <Checkbox
                  status={checked17 ? 'checked' : 'indeterminate'}
                  onPress={() => {
                    setChecked17(!checked17);
                  }}
                  uncheckedColor="red"
                  color="green"
                />
                <Text>2-Way radio </Text>
              </View>
            </View>

            <View style={styles.spacerStyle} />

            <TextInput
              label="Enter Your Actions...."
              value={text}
              onChangeText={text => setText(text)}
              mode="contained"
              textColor="black"
              style={{margin: 10, padding: 5}}
            />
            <View style={styles.spacerStyle} />

            <View style={styles.spacerStyle} />

            <Button
              mode="outlined"
              uppercase={true}
              style={{margin: 10, padding: 5}}
              onPress={() => navigation.navigate('CategeoryBfault')}>
              Submit
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

    backgroundColor: '#2c2c54',
    justifyContent:'center',
    
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

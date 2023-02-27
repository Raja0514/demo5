import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, Alert} from 'react-native';

import {Button, Checkbox} from 'react-native-paper';

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'fault.db'});

const Test = () => {
  const [checked0, setChecked0] = useState(false);

  const [checked1, setChecked1] = useState(false);

  const [checked2, setChecked2] = useState(false);

  const [checked3, setChecked3] = useState(false);

  const fault = [];

  const Click = () => {
    if (checked0 === true) {
      fault.push('fault0');
    }
    if (checked1 === true) {
      fault.push('fault1');
    }
    if (checked2 === true) {
      fault.push('fault2');
    }
    if (checked3 === true) {
      fault.push('fault3');
    }
    const data = JSON.stringify(fault);

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO user_truckdetails0(Acategeoryfault) VALUES (?)',
        [data],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert('Acategeory Added Successfully.....');
          } else Alert.alert('Failed....');
        },
      );
    });

    console.log(data);
    truckData();
  };

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='user_truckdetails0'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS user_truckdetails0', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS user_truckdetails0(operator_id INTEGER PRIMARY KEY AUTOINCREMENT,Acategeoryfault VARCHAR(25))',
              [],
            );
          }
        },
      );
    });
  }, []);

  const truckData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM user_truckdetails0', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        console.log(temp);
      });
    });
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.title}>CategeoryAfault</Text>
        <View style={styles.row}>
          <Checkbox
            uncheckedColor="green"
            color="white"
            testID="ok0"
            status={checked0 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked0(!checked0);
            }}
          />
          <Text style={styles.text}>Fault0</Text>

          <Checkbox
            uncheckedColor="green"
            color="white"
            testID="ok1"
            status={checked1 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked1(!checked1);
            }}
          />
          <Text style={styles.text}>Fault1</Text>
          <Checkbox
            uncheckedColor="green"
            color="white"
            testID="ok2"
            status={checked2 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked2(!checked2);
            }}
          />
          <Text style={styles.text}>Fault2</Text>

          <Checkbox
            uncheckedColor="green"
            color="white"
            testID="ok3"
            status={checked3 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked3(!checked3);
            }}
          />
          <Text style={styles.text}>Fault3</Text>
        </View>
        <Button
          uppercase
          style={styles.button}
          buttonColor="blue"
          textColor="white"
          mode="contained"
          onPress={Click}>
          Submit
        </Button>
      </View>
    </React.Fragment>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flexWrap: 'wrap',
  },
  text: {
    color: 'red',
    fontWeight: '900',
    fontSize: 20,
    margin: 0,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  button: {
    margin: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    margin: 20,
    fontSize: 30,
  },
});

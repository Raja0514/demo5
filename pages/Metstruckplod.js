import {Surface, TextInput, Button} from 'react-native-paper';
import React, {useState,useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView,Text} from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import DateField from 'react-native-datefield';
import moment from 'moment';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name:'Metsplods.db'});


const Metstruckplod = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [showDropDown3, setShowDropDown3] = useState(false);

  const [truck, setTruck] =useState('');  
  const [hour, setHour] = useState('');
  const [shift, setShift] =useState('');
  const [crew, setCrew] = useState('');
  const [text, setText] = useState('');
  const [text1, setText1] =useState('');
  const[date,setDate]=useState(new Date())

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='user_truckdetails1'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS user_truckdetails1', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS user_truckdetails1(operator_id INTEGER PRIMARY KEY AUTOINCREMENT,Engine_hours INT(15),operator_name VARCHAR(25),truck_number VARCHAR(25),working_hours VARCHAR(30),shift VARCHAR(25),crew VARCHAR(30),date VARCHAR(25))',
              [],
            );
          }
        },
      );
    });
  }, []);

  const insertData = () => {

    
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO user_truckdetails1(Engine_hours,operator_name,truck_number,working_hours,shift,crew,date) VALUES (?,?,?,?,?,?,?)',
        [text,text1,truck,hour,shift,crew,date],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert('Truck Details Added Successfully.....');
          } else Alert.alert('Failed....');
        },
      );
    });

    viewStudent();
  };

  const viewStudent = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM user_truckdetails1', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        console.log(temp);
      });
    });
  };

  const truckList = [
    {
      label: 'Truck 1',
      value: 'Truck 1',
    },
    {
      label: 'Truck 2',
      value: 'Truck 2',
    },
    {
      label: 'Truck 3',
      value: 'Truck 3',
    },
    {
      label: 'Truck 4',
      value: 'Truck 4',
    },
    {
      label: 'Truck 5',
      value: 'Truck 5',
    },
  ];

  const hours = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
    {
      label: '4',
      value: '4',
    },
    {
      label: '5',
      value: '5',
    },
    {
      label: '6',
      value: '6',
    },
    {
      label: '7',
      value: '7',
    },
    {
      label: '8',
      value: '8',
    },
    {
      label: '9',
      value: '9',
    },
    {
      label: '10',
      value: '10',
    },
    {
      label: '11',
      value: '11',
    },
    {
      label: '12',
      value: '12',
    },
  ];

  const Shifts = [
    {
      label: 'Day',
      value: 'Day',
    },

    {
      label: 'Night',
      value: 'Night',
    },
  ];

  const crewlist = [
    {label: 'A', value: 'A'},

    {
      label: 'B',
      value: 'B',
    },

    {
      label: 'C',
      value: 'C',
    },

    {
      label: 'D',
      value: 'D',
    },
  ];

  return (
    <>
      <Surface style={styles.containerStyle}>
        <SafeAreaView style={styles.safeContainerStyle}>
          <ScrollView style={styles.scrollView}>
           
            <TextInput
              label="Engine Hours SOS"
              value={text}
              onChangeText={text => setText(text)}
              mode={'outlined'}
              keyboardType={'numeric'}
            />
            <View style={styles.spacerStyle} />
            <Text style={{fontSize:15}}>Date</Text>
            <DateField
              labelDate="DD"
              labelMonth="MM"
              labelYear="YY"
              defaultValue={new Date()}
              styleInput={styles.inputBorder}
              onChangeText={(date) => setDate(moment(date).format("DD/MM/YYYY"))}
              
            />
            <View style={styles.spacerStyle} />
            <TextInput
              label="Operator Name"
              value={text1}
              onChangeText={text => setText1(text)}
              mode={'outlined'}
            />
            <View style={styles.spacerStyle} />
            <DropDown
              label={'TruckNumber'}
              mode={'outlined'}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={truck}
              setValue={text=>setTruck(text)}
              list={truckList}
            />
          
            <DropDown
              label={'Hours Worked'}
              mode={'outlined'}
              visible={showDropDown1}
              showDropDown={() => setShowDropDown1(true)}
              onDismiss={() => setShowDropDown1(false)}
              value={hour}
              setValue={text=>setHour(text)}
              list={hours}
            />
            <View style={styles.spacerStyle} />
            <DropDown
              label={'Shift'}
              mode={'outlined'}
              visible={showDropDown2}
              showDropDown={() => setShowDropDown2(true)}
              onDismiss={() => setShowDropDown2(false)}
              value={shift}
              setValue={text=>setShift(text)}
              list={Shifts}
            />
            <View style={styles.spacerStyle} />
            <DropDown
              label={'Crew'}
              mode={'outlined'}
              visible={showDropDown3}
              showDropDown={() => setShowDropDown3(true)}
              onDismiss={() => setShowDropDown3(false)}
              value={crew}
              setValue={text=>setCrew(text)}
              list={crewlist}
            />
            <View style={styles.spacerStyle} />

            <View style={styles.spacerStyle} />
            <Button mode={'outlined'} textColor={'black'} uppercase={true} onPress={insertData}>
              Submit
            </Button>
          </ScrollView>
        </SafeAreaView>
      </Surface>
    </>
  );
};

export default Metstruckplod;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#002333',
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 0.9,
    margin: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 30,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  inputBorder: {
    width: '30%',
    borderRadius: 3,
    borderColor: '#cacaca',
    borderWidth: 2,
  },
});

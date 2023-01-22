import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import DragAndDrop from 'volkeno-react-native-drag-drop';

import {Button} from 'react-native-paper';

const Activitysheet = () => {
  const [items, setItems] = React.useState([
    {id: 1, text: 'Pre-start'},
    {id: 2, text: 'Pre-start checks'},
    {id: 3, text: 'Crib'},
    {id: 4, text: 'Hauling (Should be calculated based on Item 2)'},
    {id: 5, text: 'Daily service'},
    {id: 6, text: 'Downtime/breakdown'},
    {id: 7, text: 'Decline blockage'},
    {id: 8, text: 'No Power'},
    {id: 9, text: 'Mechanical breakdown'},
  ]);
  const [zones, setZones] = React.useState([
    {
      id: 1,
      text: 'Activity sheet',
      items: [{id: 5, text: 'Daily service'}],
    },
  ]);

  const insertvalue = () => {
    return Alert.alert('Today Activity Submitted.....');
  };
  return (
    <>
      <DragAndDrop
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        itemKeyExtractor={item => item.id}
        zoneKeyExtractor={zone => zone.id}
        zones={zones}
        items={items}
        itemsContainerStyle={styles.itemsContainerStyle}
        zonesContainerStyle={styles.zonesContainerStyle}
        onMaj={(zones, items) => {
          setItems(items);
          setZones(zones);
        }}
        itemsInZoneStyle={styles.itemsInZoneStyle}
        renderItem={item => {
          return (
            <View style={styles.dragItemStyle}>
              <Text style={styles.dragItemTextStyle}>{item.text}</Text>
            </View>
          );
        }}
        renderZone={(zone, children, hover) => {
          return (
            <>
              <View
                style={{
                  ...styles.dragZoneStyle,
                  backgroundColor: hover ? '#E2E2E2' : '#FFF',
                }}>
                <Text stylae={styles.dragZoneTextStyle}>{zone.text}</Text>
                {children}
              </View>
              <View style={{marginLeft:125}}>
                <Button
                  uppercase="true"
                  textColor="white"
                  onPress={insertvalue}
                  mode="outlined"> Submit
                 
                </Button>
              </View>
            </>
          );
        }}
      />
    </>
  );
};

export default Activitysheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002333',
  },
  itemsInZoneStyle: {
    width: '100%',
  },
  contentContainerStyle: {
    padding: 20,
    paddingTop: 40,
  },
  itemsContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  zonesContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dragItemStyle: {
    borderColor: '#F39200',
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  dragItemTextStyle: {
    color: '#011F3B',
    fontWeight: '700',
    textAlign: 'center',
  },
  dragZoneStyle: {
    borderColor: '#F39200',
    borderWidth: 1,
    width: '100%',
    padding: 15,
    minHeight: 130,
    marginVertical: 15,
  },
  dragZoneTextStyle: {
    position: 'absolute',
    opacity: 0.2,
    zIndex: 0,
    alignSelf: 'center',
    top: '50%',
  },
});

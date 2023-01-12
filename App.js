import React from 'react';

import {} from 'react-native';

import Stacknavigator from './navigation/Stacknavigator';

import {NavigationContainer} from '@react-navigation/native';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stacknavigator />
      </NavigationContainer>
    );
  }
}

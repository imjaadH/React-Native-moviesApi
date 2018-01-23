/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import  Home  from './Screens/Home';
import  Actions  from './Screens/Actions'; 
import  Comedy  from './Screens/Comedy';
import  Drama  from './Screens/Drama';
import Details from './Screens/Details';

const App = StackNavigator ({
  home : {screen: Home},
  action : {screen: Actions},
  drama : {screen: Drama},
  comedy : {screen: Comedy}, 
  details : {screen: Details}
},
{
  initialRouteName: 'home',
})

export default App;

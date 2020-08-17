
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import RootRouter from './src/Routes/RootRouter'


export default class App extends React.Component{
  render(){
    return <RootRouter />
  }
}


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AddToDo from './containers/AddToDo';
import VisibleToDos from './containers/VisibleToDos';


export default class ToDoApp extends Component {
    // state = {
    //     todos: [],
    //     visibilityFilter: 'SHOW_ALL_TODOS'
    // }
  render() {
    return (
      <View style={styles.container}>
        <AddToDo />
        <View>
          <VisibleToDos />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

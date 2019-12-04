/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import AddToDo from './containers/AddToDo';
import VisibleToDos from './containers/VisibleToDos';


export default class ToDoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddToDo />
          <VisibleToDos />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  }
});

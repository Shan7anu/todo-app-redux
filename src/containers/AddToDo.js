/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { addToDo } from '../actions'
class AddToDo extends Component {

  state = {
    text: ''
  }
  addToDo = (text) => {
    // redux store
    this.props.dispatch(addToDo(text))
    this.setState({ text: '' })
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <TextInput
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder='E.g. Complete Project..'
          style={{ fontSize: 20, borderWidth: 2, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 10 }}
        />
        <TouchableOpacity onPress={() => this.addToDo(this.state.text)}>
          <View style={{ height: 50, backgroundColor: '#eaeaea', justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="plus" size={30} color='orange' style={{ padding: 10 }} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddToDo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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



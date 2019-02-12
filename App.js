import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Events from './Containers/Events';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Using the Api</Text>
        <Events />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Care for Life: A New Hope</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen;
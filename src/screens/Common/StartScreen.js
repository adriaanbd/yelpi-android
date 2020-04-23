import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const StartScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>SPLASH SCREEN</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#245796',
    paddingHorizontal: 90,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});

export default StartScreen;

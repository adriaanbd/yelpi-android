import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {navigate} from '../utils/navigationRef';

const AuthBackButton = () => (
  <View style={styles.backButtonContainer}>
    <TouchableOpacity onPress={() => navigate('AccountScreen')}>
      <Text style={styles.backButton}>Back</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  backButtonContainer: {
    alignSelf: 'center',
  },
  backButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default AuthBackButton;

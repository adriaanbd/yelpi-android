import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import SignupButton from '../../components/SignupButton';
import LoginContainer from '../../components/LoginContainer';

const AccountScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.logo}>VERO</Text>
    <View style={styles.buttons}>
      <SignupButton navigation={navigation} />
      <LoginContainer navigation={navigation} />
    </View>
  </View>
);

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#245796',
    paddingHorizontal: 57,
    paddingVertical: 50,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 60,
    color: '#FFFFFF',
  },
  buttons: {
    margin: 14,
  },
});

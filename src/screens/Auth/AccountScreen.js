import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';

const AccountScreen = ({navigation}) => (
  <View>
    <Text>ACCOUNT SCREEN</Text>
    <Button title="Login" onPress={() => navigation.navigate('LoginScreen')} />
    <Button
      title="Create Account"
      onPress={() => navigation.navigate('SignupScreen')}
    />
  </View>
);

export default AccountScreen;

import React from 'react';
import {Button} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const SignupButton = ({navigation}) => {
  return (
    <Button
      title="CRIAR CONTA"
      onPress={() => navigation.navigate('SignupScreen')}
      buttonStyle={styles.signup}
      titleStyle={styles.signupTitle}
    />
  );
};

const styles = StyleSheet.create({
  signup: {
    borderRadius: 38,
    width: 300,
    height: 58,
    marginBottom: 14,
    backgroundColor: '#245796',
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 3,
  },
  signupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    fontStyle: 'normal',
    fontFamily: 'Montserrat',
  },
});

export default SignupButton;

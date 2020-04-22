import React from 'react';
import {Button} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {navigate} from '../utils/navigationRef';

const SignupButton = ({bgColor}) => {
  const backgroundColor = bgColor || '#245796';
  return (
    <Button
      title="CRIAR CONTA"
      onPress={() => navigate('SignupScreen')}
      buttonStyle={{...styles.signup, backgroundColor}}
      titleStyle={styles.signupTitle}
      containerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  signup: {
    borderRadius: 38,
    width: 300,
    height: 58,
    marginBottom: 14,
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
  container: {
    alignSelf: 'center',
  },
});

export default SignupButton;

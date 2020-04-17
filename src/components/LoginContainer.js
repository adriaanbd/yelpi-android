import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import SocialLoginButton from './SocialLoginButton';

const LoginContainer = ({navigation}) => {
  return (
    <>
      <View style={styles.socialContainer}>
        <SocialLoginButton name="Google+" />
        <SocialLoginButton name="Facebook" />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.cta}>
          <Text>Já tem conta?</Text>
          <Text
            style={styles.login}
            onPress={() => navigation.navigate('LoginScreen')}>
            {' '}
            Logue aqui
          </Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cta: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  login: {
    color: '#FF8C00',
  },
});

export default LoginContainer;

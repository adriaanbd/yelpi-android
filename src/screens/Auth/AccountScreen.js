import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import SignupButton from '../../components/SignupButton';
import SocialLoginButton from '../../components/SocialLoginButton';

const AccountScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.logo}>VERO</Text>
    <View style={styles.buttons}>
      <SignupButton navigation={navigation} />
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

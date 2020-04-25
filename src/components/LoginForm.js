import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Spacer';
import {loginUser} from '../store/thunks/user';
import {setError} from '../store/actions/error';
import FormTitle from './FormTitle';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allFilled, setAllFilled] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => () => dispatch(setError(null)), []);

  const handleLogin = () => {
    dispatch(loginUser({email, password}));
  };

  const checkFilled = () => {
    if (email && password) {
      return setAllFilled(true);
    }
    return setAllFilled(false);
  };

  return (
    <View style={styles.container}>
      <FormTitle title1="Logar na sua" title2="Conta" />
      <View style={styles.formBox}>
        <Spacer space={80} />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={checkFilled}
        />
        <Spacer />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={checkFilled}
        />
        <Spacer space={95} />
        <Button
          title="Login"
          onPress={handleLogin}
          titleStyle={styles.loginTitle}
          containerStyle={styles.container}
          buttonStyle={
            allFilled ? {...styles.login, ...blueButton} : styles.login
          }
        />
      </View>
    </View>
  );
};

const greyButton = {
  borderColor: '#E5E5E5',
  backgroundColor: '#E5E5E5',
};

const blueButton = {
  backgroundColor: '#245796',
  borderColor: '#245796',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  formBox: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 40,
  },
  login: {
    borderRadius: 38,
    width: 300,
    height: 58,
    marginBottom: 14,
    borderStyle: 'solid',
    borderWidth: 3,
    ...greyButton,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    fontStyle: 'normal',
    fontFamily: 'Montserrat',
  },
});

export default LoginForm;

import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Spacer';
import FormTitle from './Common/FormTitle';
import {signupUser} from '../store/thunks/user';
import {setError} from '../store/actions/error';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [given_name, setGivenName] = useState('');
  const [last_name, setLastName] = useState('');
  const [allFilled, setAllFilled] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => () => dispatch(setError(null)), []);

  const checkFilled = () => {
    if (email && password && given_name && last_name) {
      return setAllFilled(true);
    }
    return setAllFilled(false);
  };

  const handleSignup = () => {
    const signupData = {email, password, given_name, last_name};
    dispatch(signupUser(signupData));
  };

  return (
    <View style={styles.container}>
      <FormTitle title1="Criar nova" title2="conta" />
      <View style={styles.formBox}>
        <Spacer space={50} />
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
          placeholder="Given Name"
          value={given_name}
          onChangeText={setGivenName}
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={checkFilled}
        />
        <Spacer />
        <Input
          placeholder="Last Name"
          value={last_name}
          onChangeText={setLastName}
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
        <Spacer space={35} />
        <Button
          title="Signup"
          onPress={handleSignup}
          buttonStyle={
            allFilled ? {...styles.signup, ...blueButton} : styles.signup
          }
          titleStyle={styles.signupTitle}
          containerStyle={styles.container}
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

let styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  formBox: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 40,
  },
  signup: {
    borderRadius: 38,
    width: 300,
    height: 58,
    marginBottom: 14,
    borderStyle: 'solid',
    borderWidth: 3,
    ...greyButton,
  },
  signupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    fontStyle: 'normal',
    fontFamily: 'Montserrat',
  },
});

export default UserForm;

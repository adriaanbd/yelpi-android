import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {signupUser} from '../../store/thunks/user';
import SignupButton from '../../components/SignupButton';
import Spacer from '../../components/Spacer';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [given_name, setGivenName] = useState('');
  const [last_name, setLastName] = useState('');

  const dispatch = useDispatch();

  const handleSignup = () => {
    const signupData = {email, password, given_name, last_name};
    dispatch(signupUser(signupData));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Criar novo</Text>
        <Text style={{...styles.title, ...styles.conta}}>Conta</Text>
      </View>
      <View style={styles.formBox}>
        <Spacer space={50} />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input
          placeholder="Given Name"
          value={given_name}
          onChangeText={setGivenName}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input
          placeholder="Last Name"
          value={last_name}
          onChangeText={setLastName}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer space={35} />
        <SignupButton
          title="Signup"
          onPress={handleSignup}
          bgColor={'#E5E5E5'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleBox: {
    marginTop: 29,
    paddingHorizontal: 94,
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    lineHeight: 55,
    color: '#245796',
    fontFamily: 'Montserrat',
  },
  conta: {
    fontWeight: 'bold',
  },
  formBox: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 40,
  },
});

export default SignupScreen;

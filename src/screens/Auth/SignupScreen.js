import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {signupUser} from '../../store/thunks/user';

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
    <View>
      <Text>Signup SCREEN</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Given Name"
        value={given_name}
        onChangeText={setGivenName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Last Name"
        value={last_name}
        onChangeText={setLastName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button title="Signup" onPress={handleSignup} />
      <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    alignSelf: 'center',
  },
});

export default SignupScreen;

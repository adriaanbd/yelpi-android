import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../store/thunks/user';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({email, password}));
    navigation.navigate('HomeScreen');
  };

  return (
    <View>
      <Text>LOGIN SCREEN</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

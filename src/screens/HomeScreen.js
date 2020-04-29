import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../store/thunks/user';
import {navigate} from '../utils/navigationRef';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logoutUser());

  return (
    <View>
      <Text>HOME SCREEN</Text>
      <Button
        title="Add Patient"
        onPress={() => navigate('AddNewPatientScreen')}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputSwitch from './InputSwitch';
import FormTitle from '../Common/FormTitle';
import StatusBar from './StatusBar';
import {Icon} from 'react-native-elements';
import {navigate} from '../../utils/navigationRef';
import Spacer from '../Spacer';

const AddNewPatient = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <FormTitle title1="Criar novo" title2="Paciente" />
      <View style={styles.lowerContainer}>
        <InputSwitch />
        <Icon
          name="cancel"
          type="material"
          size={32}
          color="#245796"
          onPress={() => navigate('HomeScreen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  lowerContainer: {
    justifyContent: 'space-evenly',
    height: '80%',
  },
});

export default AddNewPatient;

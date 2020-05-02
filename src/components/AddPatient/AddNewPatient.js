import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputSwitch from './InputSwitch';
import FormTitle from '../Common/FormTitle';

const AddNewPatient = () => {
  return (
    <View style={styles.container}>
      <FormTitle title1="Criar novo" title2="Paciente" />
      <InputSwitch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default AddNewPatient;

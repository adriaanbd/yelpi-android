import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputSwitch from './InputSwitch';
import FormTitle from '../Common/FormTitle';
import StatusBar from './StatusBar';
import Spacer from '../Spacer';
import {Icon} from 'react-native-elements';
import {navigate} from '../../utils/navigationRef';

const AddNewPatient = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <FormTitle title1="Criar novo" title2="Paciente" />
      <Spacer space={140} />
      <InputSwitch />
      <Spacer space={210} />
      <Icon
        name="cancel"
        type="material"
        size={32}
        color="#245796"
        onPress={() => navigate('HomeScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 40,
    alignItems: 'center',
  },
});

export default AddNewPatient;

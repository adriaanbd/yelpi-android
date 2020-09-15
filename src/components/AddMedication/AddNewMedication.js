import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputSwitch from './InputSwitch';
import FormTitle from '../Common/FormTitle';
import StatusBar from './StatusBar';
import {Icon, Input} from 'react-native-elements';
import {navigate} from '../../utils/navigationRef';

const AddNewMedication = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <FormTitle title1="Add" title2="Medication" />
      <View style={styles.lowerContainer}>
        <InputSwitch type="Name of medication" />
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
    // height: '100%',
    alignItems: 'center',
    // backgroundColor:'#000000'
  },
  lowerContainer: {
    justifyContent: 'space-evenly',
    height: '80%',
  },
});

export default AddNewMedication;

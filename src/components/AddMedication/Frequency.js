import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientMedication} from '../../store/actions/patient';
import InputLayout from './InputLayout';


const FrequencyInput = ({type}) => {
  const [frequency, setFrequency] = useState('');
  const {field} = useSelector(state => state);
  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(setPreviousField('medicationsFields'));
  };

  const handleNext = () => {
    const patientMedication = {};
    patientMedication[field] = frequency;
    dispatch(setNextField('medicationsFields'));
    dispatch(setPatientMedication(patientMedication));
  };

  const relValues = [
    '4h em 4h',
    '8h em 8h',
    '12h em 12h',
  ];

  return (
    <InputLayout prev={handlePrev} next={handleNext}>
      <Picker
        selectedValue={frequency}
        onValueChange={setFrequency}
        mode="dropdown"
        style={styles.selectBox}>
        <Picker.Item label={type} value="" />
        <Picker.Item label={relValues[0]} value={relValues[0]} />
        <Picker.Item label={relValues[1]} value={relValues[1]} />
        <Picker.Item label={relValues[2]} value={relValues[2]} />
      </Picker>
    </InputLayout>
  );
};

const styles = StyleSheet.create({
  selectBox: {
    height: 38,
    width: '100%',
    textAlign: 'center',
    color: 'grey',
  },
});

export default RelationshipInput;

import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';
import InputLayout from './InputLayout';
import {View} from 'react-native';

const TextInput = ({type}) => {
  const {field} = useSelector(state => state);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(setPreviousField());
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = text;
    dispatch(setNextField());
    dispatch(setPatientData(patientData));
  };

  return (
    <InputLayout
      prev={handlePrev}
      next={handleNext}
      left={field === 'name' ? false : true}>
      <Input placeholder={type} onChangeText={setText} />
    </InputLayout>
  );
};

export default TextInput;

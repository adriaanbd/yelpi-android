import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';
import InputLayout from './InputLayout';

import {blue} from '../Common/commonStyles';

const TextInput = ({type}) => {
  const {field} = useSelector(state => state);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(setPreviousField('medicationsFields'));
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = text;
    dispatch(setNextField('medicationsFields'));
    dispatch(setPatientData(patientData));
  };

  return (
    <InputLayout prev={handlePrev} next={handleNext}>
      <Input
        placeholder={type}
        onChangeText={setText}
        inputContainerStyle={inputContainerStyle}
        inputStyle={inputStyle}
      />
    </InputLayout>
  );
};

const inputStyle = {textAlign: 'center'};
const inputContainerStyle = {borderColor: blue};

export default TextInput;

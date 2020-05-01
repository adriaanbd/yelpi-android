import React from 'react';
import {View} from 'react-native';
import TextInput from './TextInput';
import GenderInput from './GenderInput';
import SelectInput from './SelectInput';
import SliderInput from './SliderInput';
import {useSelector} from 'react-redux';

const AddNewPatient = () => {
  const {field} = useSelector(state => state);
  let component;
  switch (field) {
    case 'age':
      component = <TextInput type="Idade" />;
      break;
    case 'gender':
      component = <GenderInput type="Sexo" />;
      break;
    case 'relationship':
      component = <SelectInput type="Relationship" />;
      break;
    case 'physicians':
      // component = <CheckboxInput type="Physicians" />;
      break;
    case 'weight':
      component = <TextInput type="Weight" />;
      break;
    case 'mentalState':
      // component = <CheckboxInput type="Mental State" />;
      break;
    case 'mentalHealth':
      component = <SliderInput type="Mental Health" />;
      break;
    case 'locomotion':
      component = <SliderInput type="Locomotion" />;
      break;
    case 'generalHealth':
      component = <SliderInput type="General Health" />;
      break;
    default:
      component = <TextInput type="Nome" />;
  }

  return <View>{component}</View>;
};

export default AddNewPatient;

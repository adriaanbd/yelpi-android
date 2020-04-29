import React, {useState} from 'react';
import {View} from 'react-native';
import TextInput from './TextInput';

const AddNewPatient = () => {
  const [field, setField] = useState('name');
  let component;
  switch (field) {
    case 'age':
      component = (
        <TextInput type="Name Component" next="gender" setField={setField} />
      );
      break;
    case 'gender':
      component = 'Checkbox Component';
      break;
    case 'relationship':
      component = 'Select Component';
      break;
    case 'specializations':
      component = 'Checkbox Component';
      break;
    case 'weight':
      component = 'Text Input Component';
      break;
    case 'mentalState':
      component = 'Checkbox Component';
      break;
    case 'mentalHealth':
      component = 'Slider Component';
      break;
    case 'locomotion':
      component = 'Slider Component';
      break;
    case 'generalHealth':
      component = 'Slider Component';
      break;
    default:
      component = <TextInput type="Name Component" />;
  }

  return <View>{component}</View>;
};

export default AddNewPatient;

import React, {useState} from 'react';
import {View} from 'react-native';
import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';
import SelectInput from './SelectInput';
import SliderInput from './SliderInput';

const AddNewPatient = () => {
  const [field, setField] = useState('name');
  let component;
  switch (field) {
    case 'age':
      component = (
        <TextInput
          type="Idade"
          prev="name"
          next="gender"
        />
      );
      break;
    case 'gender':
      component = (
        <CheckboxInput
          type="Gender Component"
          prev="age"
          next="relationship"
          setField={setField}
        />
      );
      break;
    case 'relationship':
      component = (
        <SelectInput
          type="Relationship Component"
          prev="gender"
          next="physicians"
          setField={setField}
        />
      );
      break;
    case 'physicians':
      component = (
        <CheckboxInput
          type="Physicians Component"
          prev="gender"
          next="weight"
          setField={setField}
        />
      );
      break;
    case 'weight':
      component = (
        <TextInput
          type="Weight Component"
          prev="Physicians Component"
          next="mentalState"
          setField={setField}
        />
      );
      break;
    case 'mentalState':
      component = (
        <CheckboxInput
          type="mentalState Component"
          prev="weight"
          next="mentalHealth"
          setField={setField}
        />
      );
      break;
    case 'mentalHealth':
      component = (
        <SliderInput
          type="mentalHealth Component"
          prev="mentalState"
          next="locomotion"
          setField={setField}
        />
      );
      break;
    case 'locomotion':
      component = (
        <SliderInput
          type="locomotion Component"
          prev="mentalHealth"
          next="generalHealth"
          setField={setField}
        />
      );
      break;
    case 'generalHealth':
      component = (
        <SliderInput
          type="generalHealth Component"
          prev="locomotion"
          next={null}
          setField={setField}
        />
      );
      break;
    default:
      component = (
        <TextInput
          type="Nome"
          prev={null}
          next="age"
        />
      );
  }

  return <View>{component}</View>;
};

export default AddNewPatient;

import React from 'react';
import {View} from 'react-native';
import TextInput from './TextInput';
import GenderInput from './GenderInput';
import RelationshipInput from './RelationshipInput';
import PhysiciansInput from './PhysiciansInput';
import SliderInput from './SliderInput';
import {useSelector} from 'react-redux';
import MentalState from './MentalState';
import MentalHealth from './MentalHealth';

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
      component = <RelationshipInput type="Parentesco" />;
      break;
    case 'physicians':
      component = <PhysiciansInput type="Physicians" />;
      break;
    case 'weight':
      component = <TextInput type="Weight" />;
      break;
    case 'mentalState':
      component = <MentalState type="Mental State" />;
      break;
    case 'mentalHealth':
      component = <MentalHealth type="Mental Health" />;
      break;
    case 'locomotion':
      component = <Locomotion type="Locomotion" />;
      break;
    case 'generalHealth':
      component = <GeneralHealth type="General Health" />;
      break;
    default:
      component = <TextInput type="Nome" />;
  }

  return <View>{component}</View>;
};

export default AddNewPatient;

import React from 'react';
import TextInput from './TextInput';
import GenderInput from './GenderInput';
import RelationshipInput from './RelationshipInput';
import PhysiciansInput from './PhysiciansInput';
import SliderInput from './SliderInput';
import MentalState from './MentalState';
import BirthDate from './BirthDate';
import {useSelector} from 'react-redux';

const InputSwitch = () => {
  const {field} = useSelector(state => state);

  let component;

  switch (field) {
    case 'sobrenome':
      component = <TextInput type="Sobrenome" />;
      break;
    case 'birthdate':
      component = <BirthDate type="Data de nascimento" />;
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
      component = <TextInput type="Peso atual Kg" />;
      break;
    case 'mentalState':
      component = <MentalState type="Mental State" />;
      break;
    case 'mentalHealth':
      component = <SliderInput type="saúde mental" />;
      break;
    case 'physicalHealth':
      component = <SliderInput type="saúde física" />;
      break;
    case 'locomotion':
      component = <SliderInput type="locomoção" />;
      break;
    case 'generalHealth':
      component = <SliderInput type="saudade" tail={true} />;
      break;
    default:
      component = <TextInput type="Nome" />;
  }
  return component;
};

export default InputSwitch;

import React from 'react';
import TextInput from './TextInput';

import {useSelector} from 'react-redux';

const InputSwitch = () => {
  const {field} = useSelector(state => state);

  let component;

  switch (field) {
    case 'frequency':
      component = <TextInput type="Frequency" />;
      break;
    case 'duration':
      component = <TextInput type="Duration" />;
      break;
    case 'time':
      component = <TextInput type="Time" />;
      break;

    default:
      component = <TextInput type="Name of medication" />;
  }
  return component;
};

export default InputSwitch;

import React from 'react';
import {View} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import { setNextField } from '../../store/actions/field';

const TextInput = ({type, prev, next, setField}) => {
  const dispatch = useDispatch();
  return (
    <View>
      {prev ? <Button title="Back" onPress={() => setField(prev)} /> : null}
      <Input
        placeholder={type}
      />
      <Button title="Next" onPress={() => dispatch(setNextField())} />
    </View>
  );
};

export default TextInput;

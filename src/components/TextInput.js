import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

const TextInput = ({type, next, setField}) => {
  return (
    <View>
      <Button title="Back" />
      <Text>{type}</Text>
      <Button title="Next" onPress={() => setField(next)} />
    </View>
  );
};

export default TextInput;

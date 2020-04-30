import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';

const TextInput = ({type, prev, next, setField}) => {
  return (
    <View>
      {prev ? <Button title="Back" onPress={() => setField(prev)} /> : null}
      <Text>{type}</Text>
      <Button title="Next" onPress={() => setField(next)} />
    </View>
  );
};

export default TextInput;

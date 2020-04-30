import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';

const SelectInput = ({type, prev, next, setField}) => {
  return (
    <View>
      {prev ? <Button title="Back" onPress={() => setField(prev)} /> : null}
      <Text>{type}</Text>
      <Button title="Next" onPress={() => setField(next)} />
    </View>
  );
};

export default SelectInput;

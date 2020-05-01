import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';

const TextInput = ({type}) => {
  const {field} = useSelector(state => state);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handlePrevious = () => {
    dispatch(setPreviousField());
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = text;
    dispatch(setNextField());
    dispatch(setPatientData(patientData));
  };

  return (
    <View>
      <Input
        placeholder={type}
        leftIcon={
          field !== 'name' ? (
            <Icon
              name="caretleft"
              type="antdesign"
              onPress={() => handlePrevious()}
            />
          ) : null
        }
        rightIcon={
          <Icon
            name="caretright"
            type="antdesign"
            onPress={() => handleNext()}
          />
        }
        onChangeText={setText}
      />
    </View>
  );
};

export default TextInput;

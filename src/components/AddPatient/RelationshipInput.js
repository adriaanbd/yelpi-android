import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';

const RelationshipInput = ({type}) => {
  const {name} = useSelector(state => state.patient);
  const [relationship, setRelationship] = useState('');
  const {field} = useSelector(state => state);
  const dispatch = useDispatch();

  const handlePrevious = () => {
    dispatch(setPreviousField());
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = relationship;
    dispatch(setNextField());
    dispatch(setPatientData(patientData));
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        name="caretleft"
        type="antdesign"
        onPress={() => handlePrevious()}
      />
      <Picker
        selectedValue={relationship}
        onValueChange={setRelationship}
        style={{height: 50, width: '80%'}}>
        <Picker.Item label={type} value="" />
        <Picker.Item
          label={`O ${name.split(' ')[0]} é meu pai`}
          value="paper"
        />
        <Picker.Item
          label={`O ${name.split(' ')[0]} é meu irmao`}
          value="rock"
        />
        <Picker.Item label={`O ${name.split(' ')[0]} sou eu`} value="scissor" />
      </Picker>
      <Icon name="caretright" type="antdesign" onPress={() => handleNext()} />
    </View>
  );
};

export default RelationshipInput;

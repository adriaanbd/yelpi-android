import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';
import InputLayout from './InputLayout';

const RelationshipInput = ({type}) => {
  const {name} = useSelector(state => state.patient);
  const [relationship, setRelationship] = useState('');
  const {field} = useSelector(state => state);
  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(setPreviousField());
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = relationship;
    dispatch(setNextField());
    dispatch(setPatientData(patientData));
  };

  const firstName = name.split(' ')[0];
  const relValues = [
    `O ${firstName} é meu pai`,
    `O ${firstName} é meu irmao`,
    `O ${firstName} sou eu`,
  ];

  return (
    <InputLayout prev={handlePrev} next={handleNext}>
      <Picker
        selectedValue={relationship}
        onValueChange={setRelationship}
        mode="dropdown"
        style={styles.selectBox}>
        <Picker.Item label={type} value="" />
        <Picker.Item label={relValues[0]} value={relValues[0]} />
        <Picker.Item label={relValues[1]} value={relValues[1]} />
        <Picker.Item label={relValues[2]} value={relValues[2]} />
      </Picker>
    </InputLayout>
  );
};

const styles = StyleSheet.create({
  selectBox: {
    height: 38,
    width: '100%',
    textAlign: 'center',
    color: 'grey',
  },
});

export default RelationshipInput;

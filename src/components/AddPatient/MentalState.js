import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';

import {
  checkboxContainerStyle,
  checkboxTextStyle,
  blue,
} from '../Common/commonStyles';
import FormSubTitle from '../Common/FormSubTitle';
import InputLayout from './InputLayout';

const titleCase = str => `${str[0].toUpperCase()}${str.slice(1)}`;

const MentalState = () => {
  const {field, patient} = useSelector(state => state);
  const [lucid, setLucid] = useState(false);
  const [senil, setSenil] = useState(false);
  const [mentalState, setMentalState] = useState('');
  const dispatch = useDispatch();

  const patientFirstName = titleCase(patient.name.split(' ')[0].toLowerCase());

  const handlePrev = () => {
    dispatch(setPreviousField());
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = mentalState;
    dispatch(setNextField());
    dispatch(setPatientData(patientData));
  };

  const handleLucid = () => {
    setLucid(!lucid);
    if (senil) {
      setSenil(false);
    }
    lucid ? setMentalState('') : setMentalState('lúcido');
  };

  const handleSenil = () => {
    setSenil(!senil);
    if (lucid) {
      setLucid(false);
    }
    senil ? setMentalState('') : setMentalState('senil');
  };

  return (
    <InputLayout prev={handlePrev} next={handleNext}>
      <FormSubTitle title1={`A ${patientFirstName} está`} />
      <View style={styles.genderContainer}>
        <CheckBox
          title="Lúcido"
          checked={lucid}
          onPress={handleLucid}
          containerStyle={checkboxContainerStyle}
          textStyle={checkboxTextStyle}
          checkedIcon="square"
          checkedColor={blue}
        />
        <CheckBox
          title="Senil"
          checked={senil}
          onPress={handleSenil}
          containerStyle={checkboxContainerStyle}
          textStyle={checkboxTextStyle}
          checkedIcon="square"
          checkedColor={blue}
        />
      </View>
    </InputLayout>
  );
};

const styles = StyleSheet.create({
  genderContainer: {
    marginTop: -35, // hack fix
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MentalState;

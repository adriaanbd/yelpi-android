import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';
import InputLayout from './InputLayout';
import FormSubTitle from '../Common/FormSubTitle';

import {
  checkboxContainerStyle,
  checkboxTextStyle,
  blue,
} from '../Common/commonStyles';

const GenderInput = () => {
  const {field} = useSelector(state => state);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [gender, setGender] = useState('');
  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(setPreviousField());
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = gender;
    dispatch(setNextField());
    dispatch(setPatientData(patientData));
  };

  const handleMale = () => {
    setMale(!male);
    if (female) {
      setFemale(false);
    }
    male ? setGender('') : setGender('male');
  };

  const handleFemale = () => {
    setFemale(!female);
    if (male) {
      setMale(false);
    }
    female ? setGender('') : setGender('female');
  };

  return (
    <InputLayout prev={handlePrev} next={handleNext}>
      <FormSubTitle title1="Sexo" />
      <View style={styles.genderContainer}>
        <CheckBox
          title="Masculino"
          checked={male}
          onPress={handleMale}
          containerStyle={checkboxContainerStyle}
          textStyle={checkboxTextStyle}
          checkedIcon="square"
          checkedColor={blue}
        />
        <CheckBox
          title="Femenino"
          checked={female}
          onPress={handleFemale}
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

export default GenderInput;

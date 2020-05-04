import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {CheckBox, Icon, Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';
import InputLayout from './InputLayout';

const GenderInput = ({type}) => {
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
      <Text style={styles.title}>Sexo</Text>
      <View style={styles.genderContainer}>
        <CheckBox
          title="Masculino"
          checked={male}
          onPress={handleMale}
          containerStyle={borderWidth}
          checkedColor={blue}
        />
        <CheckBox
          title="Femenino"
          checked={female}
          onPress={handleFemale}
          containerStyle={borderWidth}
          checkedColor={blue}
        />
      </View>
    </InputLayout>
  );
};

const blue = '#245796';

const styles = StyleSheet.create({
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: blue,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    lineHeight: 37,
  },
});

const borderWidth = {
  borderWidth: 0,
};

export default GenderInput;

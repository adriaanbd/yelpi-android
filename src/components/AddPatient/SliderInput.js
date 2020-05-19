import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';
import InputLayout from './InputLayout';
import {StyleSheet} from 'react-native';
import {navigate} from '../../utils/navigationRef';
import {titleCase} from '../../utils/helpers';
import FormSubTitle from '../Common/FormSubTitle';

const SliderInput = ({type, tail}) => {
  const {field, patient} = useSelector(state => state);
  const [sliderValue, setSliderValue] = useState(50);
  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(setPreviousField());
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = sliderValue;
    dispatch(setPatientData(patientData));
    if (tail) {
      navigate('PatientFormScreen');
    }
    dispatch(setNextField());
  };

  return (
    <InputLayout prev={handlePrev} next={handleNext}>
      <FormSubTitle
        title1={`A ${type}`}
        title2={`do ${titleCase(patient.nome)} está`}
      />
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        value={sliderValue}
        onValueChange={setSliderValue}
      />
    </InputLayout>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 40,
  },
});

export default SliderInput;

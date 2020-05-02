import React, {useState} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import Slider from '@react-native-community/slider';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';

const SliderInput = ({type, tail}) => {
  const {field} = useSelector(state => state);
  const [sliderValue, setSliderValue] = useState(50);
  const dispatch = useDispatch();

  const handlePrevious = () => {
    dispatch(setPreviousField());
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = sliderValue;
    dispatch(setPatientData(patientData));
    if (tail) {
    } else {
      dispatch(setNextField());
    }
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        name="caretleft"
        type="antdesign"
        onPress={() => handlePrevious()}
      />
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        value={sliderValue}
        onValueChange={setSliderValue}
      />
      <Icon name="caretright" type="antdesign" onPress={() => handleNext()} />
    </View>
  );
};

export default SliderInput;

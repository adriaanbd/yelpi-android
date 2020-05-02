import React, {useState} from 'react';
import {View} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';

const GenderInput = ({type}) => {
  const {field} = useSelector(state => state);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [gender, setGender] = useState('');
  const dispatch = useDispatch();

  const handlePrevious = () => {
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
    <View style={{flexDirection: 'row'}}>
      <Icon
        name="caretleft"
        type="antdesign"
        onPress={() => handlePrevious()}
      />
      <CheckBox title="Male" checked={male} onPress={() => handleMale()} />
      <CheckBox
        title="Female"
        checked={female}
        onPress={() => handleFemale()}
      />
      <Icon name="caretright" type="antdesign" onPress={() => handleNext()} />
    </View>
  );
};

export default GenderInput;

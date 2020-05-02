import React, {useState} from 'react';
import {View} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';

const MentalState = ({type}) => {
  const {field} = useSelector(state => state);
  const [lucid, setLucid] = useState(false);
  const [senil, setSenil] = useState(false);
  const [mentalState, setMentalState] = useState('');
  const dispatch = useDispatch();

  const handlePrevious = () => {
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
    <View style={{flexDirection: 'row'}}>
      <Icon
        name="caretleft"
        type="antdesign"
        onPress={() => handlePrevious()}
      />
      <CheckBox title="Lúcido" checked={lucid} onPress={() => handleLucid()} />
      <CheckBox title="Senil" checked={senil} onPress={() => handleSenil()} />
      <Icon name="caretright" type="antdesign" onPress={() => handleNext()} />
    </View>
  );
};

export default MentalState;

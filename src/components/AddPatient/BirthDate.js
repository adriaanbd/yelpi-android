import React, {useState} from 'react';
import InputLayout from './InputLayout';
import DateTimePicker from '@react-native-community/datetimepicker';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity, View, Platform} from 'react-native';
import TextInput from './TextInput';
import moment from 'moment';
import {Button} from 'react-native-elements';

const BirthDate = () => {
  const {field} = useSelector(state => state);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const onChange = selectedDate => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow('date');
    setShow(true);
  };

  const handlePrev = () => {
    dispatch(setPreviousField());
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = date;
    dispatch(setNextField());
    dispatch(setPatientData(patientData));
  };

  return (
    // <InputLayout prev={handlePrev} next={handleNext}>
    <View>
      <View>
        <Button onPress={showDatePicker} title="Show date" />
      </View>
      <View>
        {/* <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            label="Label"
            placeholder={moment(date).format('MMMM DD, YYYY')}
            disabled
            onChangeText={() => {}}
            value=""
          />
        </TouchableOpacity> */}
        {show && (
          <DateTimePicker
            testID="birthdate"
            value={date}
            mode="date"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

export default BirthDate;

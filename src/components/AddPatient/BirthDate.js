import React, {useState} from 'react';
import moment from 'moment';
import InputLayout from './InputLayout';
import DatePicker from 'react-native-datepicker';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';
import {useSelector, useDispatch} from 'react-redux';
import {blue} from '../Common/commonStyles';
import FormSubTitle from '../Common/FormSubTitle';

const BirthDate = ({type}) => {
  const {field, patient} = useSelector(state => state);
  const [date, setDate] = useState(
    patient.birthdate || moment(new Date()).format('DD MMMM YYYY'),
  );
  const dispatch = useDispatch();

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
    <InputLayout prev={handlePrev} next={handleNext}>
      <FormSubTitle title1={type} />
      <DatePicker
        style={dateContainerStyle}
        placeholder={type}
        format="DD MMMM YYYY"
        date={moment(date)}
        mode="date"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={dateStyles}
        onDateChange={d => setDate(d)}
      />
    </InputLayout>
  );
};

const dateStyles = {
  dateInput: {
    marginLeft: 0,
    borderWidth: 0,
  },
  dateText: {
    fontSize: 21,
    color: blue,
  },
};

const dateContainerStyle = {
  width: '100%',
};

export default BirthDate;

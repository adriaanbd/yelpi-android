import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import Spacer from '../Spacer';
import {setPatientData} from '../../store/actions/patient';
import {createPatient} from '../../store/thunks/patient';
import FormTitle from '../Common/FormTitle';
import StatusBar from './StatusBar';
import { blue } from '../Common/commonStyles';

const PatientForm = () => {
  const {patient} = useSelector(state => state);
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [mentalState, setMentalState] = useState('');
  const [mentalHealth, setMentalHealth] = useState('');
  const [relationship, setRelationship] = useState('');
  const [physicalHealth, setPhysicalHealth] = useState('');
  const [locomotion, setLocomotion] = useState('');
  const [generalHealth, setGeneralHealth] = useState('');

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <StatusBar />
      </View>
      <FormTitle title1="Revisar novo" title2="paciente" />
      <Spacer space={15} />
      <View style={styles.twoCols}>
        <TouchableOpacity style={styles.halfCol}>
          <Input
            placeholder={patient.nome}
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => dispatch(setPatientData({...patient, name}))}
            inputContainerStyle={inputContainerStyle}
            inputStyle={inputStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.halfCol}>
          <Input
            placeholder={patient.sobrenome}
            value={lastname}
            onChangeText={setLastName}
            onSubmitEditing={() => dispatch(setPatientData({...patient, name}))}
            inputContainerStyle={inputContainerStyle}
            inputStyle={inputStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.twoCols}>
        <TouchableOpacity style={styles.halfCol}>
          <Input
            placeholder={patient.birthdate}
            value={age}
            onChangeText={setAge}
            onSubmitEditing={() => dispatch(setPatientData({...patient, age}))}
            inputContainerStyle={inputContainerStyle}
            inputStyle={inputStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.halfCol}>
          <Input
            placeholder={patient.weight}
            value={weight}
            onChangeText={setWeight}
            onSubmitEditing={() =>
              dispatch(setPatientData({...patient, weight}))
            }
            inputContainerStyle={inputContainerStyle}
            inputStyle={inputStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.twoCols}>
        <TouchableOpacity style={styles.halfCol}>
          <Input
            placeholder={patient.gender}
            value={gender}
            onChangeText={setGender}
            inputContainerStyle={inputContainerStyle}
            inputStyle={inputStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.halfCol}>
          <Input
            placeholder={String(patient.mentalState)}
            value={mentalState}
            onChangeText={setMentalState}
            inputContainerStyle={inputContainerStyle}
            inputStyle={inputStyle}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Input
          placeholder={String(patient.relationship)}
          value={relationship}
          onChangeText={setRelationship}
          inputContainerStyle={inputContainerStyle}
          inputStyle={inputStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Input
          placeholder={String(patient.mentalHealth)}
          value={mentalHealth}
          onChangeText={setMentalHealth}
          inputContainerStyle={inputContainerStyle}
          inputStyle={inputStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Input
          placeholder={String(patient.physicalHealth)}
          value={physicalHealth}
          onChangeText={setPhysicalHealth}
          inputContainerStyle={inputContainerStyle}
          inputStyle={inputStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Input
          placeholder={String(patient.locomotion)}
          value={locomotion}
          onChangeText={setLocomotion}
          inputContainerStyle={inputContainerStyle}
          inputStyle={inputStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Input
          placeholder={String(patient.generalHealth)}
          value={generalHealth}
          onChangeText={setGeneralHealth}
          inputContainerStyle={inputContainerStyle}
          inputStyle={inputStyle}
        />
      </TouchableOpacity>
      <Spacer />
      <Button
        title="CONFIRMAR"
        onPress={() => dispatch(createPatient(patient))}
        titleStyle={styles.loginTitle}
        containerStyle={styles.container}
        buttonStyle={styles.login}
      />
    </View>
  );
};

const inputContainerStyle = {
  borderWidth: 1,
  borderColor: blue,
  height: 38,
  marginVertical: 5,
};

const inputStyle = {
  textAlign: 'center',
};

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    height: 38,
  },
  statusBar: {
    alignSelf: 'center',
  },
  container: {
    height: '100%',
    paddingHorizontal: 30,
  },
  twoCols: {
    flexDirection: 'row',
  },
  halfCol: {
    width: '50%',
  },
  login: {
    borderRadius: 38,
    width: 300,
    height: 58,
    marginBottom: 14,
    borderStyle: 'solid',
    borderWidth: 3,
    backgroundColor: '#245796',
    borderColor: '#245796',
  },
});

export default PatientForm;

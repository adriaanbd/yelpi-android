import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import Spacer from '../Spacer';
import {setPatientData} from '../../store/actions/patient';
import {createPatient} from '../../store/thunks/patient';

const PatientForm = () => {
  const {patient} = useSelector(state => state);
  const [name, setName] = useState('');
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
      <TouchableOpacity>
        <Input
          placeholder={patient.name}
          value={name}
          onChangeText={setName}
          onSubmitEditing={() => dispatch(setPatientData({...patient, name}))}
        />
      </TouchableOpacity>
      <View style={styles.twoCols}>
        <TouchableOpacity style={styles.halfCol}>
          <Input
            placeholder={patient.age}
            value={age}
            onChangeText={setAge}
            onSubmitEditing={() => dispatch(setPatientData({...patient, age}))}
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
          />
        </TouchableOpacity>
      </View>
      <View style={styles.twoCols}>
        <TouchableOpacity style={styles.halfCol}>
          <Input
            placeholder={patient.gender}
            value={gender}
            onChangeText={setGender}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.halfCol}>
          <Input
            placeholder={String(patient.mentalState)}
            value={mentalState}
            onChangeText={setMentalState}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Input
          placeholder={String(patient.relationship)}
          value={relationship}
          onChangeText={setRelationship}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Input
          placeholder={String(patient.mentalHealth)}
          value={mentalHealth}
          onChangeText={setMentalHealth}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Input
          placeholder={String(patient.physicalHealth)}
          value={physicalHealth}
          onChangeText={setPhysicalHealth}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Input
          placeholder={String(patient.locomotion)}
          value={locomotion}
          onChangeText={setLocomotion}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Input
          placeholder={String(patient.generalHealth)}
          value={generalHealth}
          onChangeText={setGeneralHealth}
        />
      </TouchableOpacity>
      <Spacer />
      <Button
        title="CONFIRMAR"
        onPress={() => dispatch(createPatient(patient))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  twoCols: {
    flexDirection: 'row',
  },
  halfCol: {
    width: '50%',
  },
});

export default PatientForm;

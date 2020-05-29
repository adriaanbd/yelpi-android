import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Button, Card, Text} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import Spacer from '../Spacer';
import {setPatientData} from '../../store/actions/patient';
import {createPatient} from '../../store/thunks/patient';
import FormTitle from '../Common/FormTitle';
import StatusBar from './StatusBar';
import {blue, fontFamily} from '../Common/commonStyles';
import Slider from '@react-native-community/slider';
import {titleCase} from '../../utils/helpers';
import Modal, {ModalTitle} from 'react-native-modals';
import ModalContent from 'react-native-modals/dist/components/ModalContent';
import TextInput from './TextInput';

const PatientForm = () => {
  const {patient} = useSelector(state => state);
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [mentalState, setMentalState] = useState('');
  const [relationship, setRelationship] = useState('');
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <StatusBar />
      </View>
      <FormTitle title1="Revisar novo" title2="paciente" />
      <Spacer space={4} />
      <View style={styles.twoCols}>
        <TouchableOpacity
          style={styles.halfCol}
          onPress={() => setVisible(true)}>
          <Modal
            visible={visible}
            modalTitle={<ModalTitle title="Modal title" />}
            onTouchOutside={() => setVisible(false)}>
            <ModalContent style={{height: 250, width: 300}} >
              <Text>{"Hello"}</Text>
            </ModalContent>
          </Modal>
          <Input
            placeholder={patient.nome}
            value={name}
            // onChangeText={setName}
            // onSubmitEditing={() => dispatch(setPatientData({...patient, name}))}
            inputContainerStyle={inputContainerStyle}
            inputStyle={inputStyle}
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
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
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
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
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
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
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
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
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.halfCol}>
          <Input
            placeholder={String(patient.mentalState)}
            value={mentalState}
            onChangeText={setMentalState}
            inputContainerStyle={inputContainerStyle}
            inputStyle={inputStyle}
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
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
          placeholderTextColor="black"
        />
      </TouchableOpacity>
      <Card containerStyle={card.container}>
        <View style={card.headerContainer}>
          <Text style={card.headerText}>O estado de saúde de</Text>
          <Text style={card.headerText}>{`${titleCase(
            patient.nome,
          )} está:`}</Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          value={patient.generalHealth}
          disabled
        />
        <View style={card.footer}>
          <Text>Ruim</Text>
          <Text>Boa</Text>
        </View>
      </Card>
      <Spacer space={4} />
      <Card containerStyle={card.container}>
        <View style={card.headerContainer}>
          <Text style={card.headerText}>{`${titleCase(
            patient.nome,
          )} frequenta:`}</Text>
        </View>
        <View style={card.physiciansContainer}>
          {patient.physicians.map(p => (
            <Text style={card.physicians}>{`${p}`}</Text>
          ))}
        </View>
      </Card>
      <Spacer space={12} />
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
  height: 16,
  marginVertical: 16,
  borderBottomWidth: 0,
};

const inputStyle = {
  borderWidth: 1,
  textAlign: 'center',
  borderColor: blue,
  padding: 0,
  fontFamily: fontFamily,
  lineHeight: 24,
  fontWeight: '300',
  fontStyle: 'normal',
  fontSize: 20,
};

const card = {
  container: {
    height: 112,
    borderWidth: 1,
    borderColor: blue,
    marginVertical: 4,
    marginHorizontal: 10,
    padding: 0,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 4,
  },
  headerText: {
    fontFamily: fontFamily,
    fontSize: 20,
  },
  physiciansContainer: {
    flexWrap: 'wrap',
    height: 78,
  },
  physicians: {
    paddingHorizontal: 24,
    fontSize: 18,
    color: blue,
    fontWeight: '300',
    fontStyle: 'normal',
    fontFamily: fontFamily,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
};

const styles = StyleSheet.create({
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

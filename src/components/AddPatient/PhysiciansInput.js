import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Icon, CheckBox} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setNextField, setPreviousField} from '../../store/actions/field';
import {setPatientData} from '../../store/actions/patient';

const PhysiciansInput = ({type}) => {
  const [cardiologista, setCardiologista] = useState(false);
  const [neurologista, setNeurologista] = useState(false);
  const [ortopedista, setOrtopedista] = useState(false);
  const [oftalmologista, setOftalmologista] = useState(false);
  const [endocrinologista, setEndocrinologista] = useState(false);
  const [oncologista, setOncologista] = useState(false);
  const [geriatra, setGeriatra] = useState(false);
  const [clinicoGeral, setClinicoGeral] = useState(false);
  const [outros, setOutros] = useState(false);

  const [physicians, setPhysicians] = useState([]);

  const {field} = useSelector(state => state);
  const dispatch = useDispatch();

  const handlePrevious = () => {
    dispatch(setPreviousField());
  };

  const handleNext = () => {
    const patientData = {};
    patientData[field] = physicians;
    dispatch(setNextField());
    dispatch(setPatientData(patientData));
  };

  const physicianTypes = [
    ['Cardiologista', cardiologista, setCardiologista],
    ['Neurologista', neurologista, setNeurologista],
    ['Ortopedista', ortopedista, setOrtopedista],
    ['Oftalmologista', oftalmologista, setOftalmologista],
    ['Endocrinologista', endocrinologista, setEndocrinologista],
    ['Oncologista', oncologista, setOncologista],
    ['Geriatra', geriatra, setGeriatra],
    ['Clinico Geral', clinicoGeral, setClinicoGeral],
    ['Outros', outros, setOutros],
  ];

  useEffect(() => {
    setPhysicians(
      physicianTypes.filter(arr => arr[1] === true).map(arr => arr[0]),
    );
  }, [
    cardiologista,
    neurologista,
    ortopedista,
    oftalmologista,
    endocrinologista,
    oncologista,
    geriatra,
    clinicoGeral,
    outros,
  ]);

  const handleCheck = phys => {
    const [isChecked, toggleCheck] = phys;
    toggleCheck(!isChecked);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        name="caretleft"
        type="antdesign"
        onPress={() => handlePrevious()}
      />
      <View>
        {physicianTypes.map((phys, i) => (
          <CheckBox
            title={phys[0]}
            key={i}
            onPress={() => handleCheck([phys[1], phys[2]])}
            checked={phys[1]}
          />
        ))}
      </View>
      <Icon name="caretright" type="antdesign" onPress={() => handleNext()} />
    </View>
  );
};

export default PhysiciansInput;

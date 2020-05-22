import { SET_PATIENT_DATA } from '../../store/actions/types';
import {setPatientData} from '../../store/actions/patient';

describe('setPatientData action', () => {
  test('returns the correct action object', () => {
    const patientData = {
      given_name: 'Pablo',
      last_name: 'Escobar'
    };
    const action = setPatientData(patientData);

    expect(action.patientData.given_name).toBe(patientData.given_name);

    expect(action.type).toBe(SET_PATIENT_DATA);

  })
})
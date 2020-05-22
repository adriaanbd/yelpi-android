import {SET_PATIENT_DATA} from '../../store/actions/types';
import patientReducer from '../../store/reducers/patient';
import { act } from 'react-test-renderer';

describe('patientReducer', () => {
  test('returns initialState', () => {
    const initialState = {};
    const action = {
      type: 'SET_NO_DATA',
    };

    expect(patientReducer(initialState, action)).toBe(initialState);
  });

  test('returns patient data', () => {
    const initialState = {
      given_name: 'Pablo',
    };
    const patientData = {
      last_name: 'Escobar'
    }
    const action = {
      type: SET_PATIENT_DATA,
      patientData,
    };

    const newState = patientReducer(initialState, action);
  
    expect(newState.given_name).toBe(initialState.given_name);

    expect(newState.last_name).toBe(patientData.last_name);
  });
});
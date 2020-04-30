import {SET_PATIENT_DATA} from './types';

export const setPatientData = patientData => ({
  type: SET_PATIENT_DATA,
  patientData,
});

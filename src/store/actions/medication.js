import {SET_PATIENT_MEDICATION} from './types';

export const setPatientData = patientMedication => ({
  type: SET_PATIENT_MEDICATION,
  patientMedication,
});

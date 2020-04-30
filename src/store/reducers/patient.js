import {SET_PATIENT_DATA} from '../actions/types';

export default (state = {}, action) => {
  const {type, patientData} = action;
  switch (type) {
    case SET_PATIENT_DATA:
      return {...state, ...patientData};
    default:
      break;
  }
  return state;
};

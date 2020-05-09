import AsyncStorage from '@react-native-community/async-storage';
// import {setError} from '../actions/error';
import {sendAuthorizedRequest} from '../../utils/api';
import {navigate} from '../../utils/navigationRef';

export const createPatient = patientData => {
  return async dispatch => {
    const path = 'v1/patients';
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    try {
      const res = await sendAuthorizedRequest('post', path, token, {
        patient: {...patientData, birthdate: '01-01-1985'},
      });
      // dispatch(setError(null));
      console.log(res);
      return navigate('SuccessScreen');
    } catch (error) {
      const errorData = error.response.data;
      console.log(errorData);
      // return dispatch(setError(errorData));
    }
  };
};

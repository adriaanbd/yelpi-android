import AsyncStorage from '@react-native-community/async-storage';
import {setCurrentUser} from '../actions/user';
import {setError} from '../actions/error';
import {sendRequest} from '../../utils/api';
import {navigate} from '../../utils/navigationRef';

export const loginUser = loginData => {
  return async dispatch => {
    const path = 'v1/sessions';
    try {
      const res = await sendRequest('post', path, loginData);
      const userData = await res.data;
      await AsyncStorage.setItem('token', userData.token);

      dispatch(setCurrentUser(userData.user));
      return navigate('HomeScreen');
    } catch (error) {
      return dispatch(setError(error.response.data.error));
    }
  };
};

export const signupUser = signupData => {
  return async dispatch => {
    const path = 'v1/users';
    try {
      const res = await sendRequest('post', path, {user: signupData});
      const userData = await res.data;
      await AsyncStorage.setItem('token', userData.token);

      dispatch(setCurrentUser(userData.user));
      return navigate('HomeScreen');
    } catch (error) {
      let errorMessage;
      if (error.response.data.errors.email) {
        errorMessage = `${error.response.data.message}. Email ${
          error.response.data.errors.email[0]
        }`;
      }
      return dispatch(setError(errorMessage));
    }
  };
};

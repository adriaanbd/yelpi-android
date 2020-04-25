import AsyncStorage from '@react-native-community/async-storage';
import {setCurrentUser} from '../actions/user';
import {setError} from '../actions/error';
import {sendRequest, sendAuthorizedRequest} from '../../utils/api';
import {navigate} from '../../utils/navigationRef';

export const loginUser = loginData => {
  return async dispatch => {
    const path = 'v1/sessions';
    try {
      const res = await sendRequest('post', path, loginData);
      const userData = await res.data;
      await AsyncStorage.setItem('token', userData.token);

      dispatch(
        setCurrentUser({
          authenticated: true,
          data: userData.user,
        }),
      );
      dispatch(setError(null));
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
      dispatch(setError(null));
      return navigate('HomeScreen');
    } catch (error) {
      const errorData = error.response.data;
      let errorMessage;
      if (errorData.errors.email) {
        errorMessage = `${errorData.message}. Email ${
          errorData.errors.email[0]
        }`;
        return dispatch(setError(errorMessage));
      } else if (errorData.errors.password) {
        errorMessage = `${errorData.message}. Password ${
          errorData.errors.password[0]
        }`;
        return dispatch(setError(errorMessage));
      }
      return dispatch(setError(errorData.message));
    }
  };
};

export const fetchUserData = id => async dispatch => {
  const path = `v1/users/${id}`;
  const token = await AsyncStorage.getItem('token');
  try {
    const res = await sendAuthorizedRequest('get', path, token);

    return dispatch(
      setCurrentUser({
        authenticated: true,
        data: res.data.user,
      }),
    );
  } catch (err) {
    return dispatch(setError(err.response.data.message));
  }
};

export const logoutUser = () => {
  return async dispatch => {
    try {
      await AsyncStorage.removeItem('token');
      dispatch(
        setCurrentUser({
          authenticated: false,
          data: null,
        }),
      );
      return navigate('AccountScreen');
    } catch (error) {
      const errorData = error.response.data;
      return dispatch(setError(errorData.message));
    }
  };
};

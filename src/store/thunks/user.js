import {AsyncStorage} from '@react-native-community/async-storage';
import {setCurrentUser} from '../actions/user';
import {sendRequest} from '../../utils/api';

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
      return res;
    } catch (error) {
      return error;
    }
  };
};

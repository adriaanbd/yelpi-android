import {setCurrentUser} from '../actions/user';
import {sendRequest} from '../../utils/api';

export const loginUser = loginData => {
  return async dispatch => {
    const path = 'v1/sessions/';
    try {
      const res = await sendRequest('post', path, loginData);
      const userData = await res.data;
      console.log(userData);
      // dispatch(setCurrentUser(userData));
      return res;
    } catch (error) {
      return error;
    }
  };
};

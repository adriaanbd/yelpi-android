import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import {navigate} from '../../utils/navigationRef';
import {fetchUserData} from './user';

export const resolveAuth = () => async dispatch => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    const decoded = decode(token);
    await dispatch(fetchUserData(decoded.id));
    navigate('HomeScreen');
  } else {
    navigate('AuthFlow');
  }
};

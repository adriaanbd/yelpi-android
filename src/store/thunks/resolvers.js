import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../../utils/navigationRef';

export const resolveAuth = () => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    navigate('HomeScreen');
  } else {
    navigate('AuthFlow');
  }
};

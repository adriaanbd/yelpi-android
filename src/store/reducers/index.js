import {combineReducers} from 'redux';
import currentUser from './currentUser';
import error from './error';
import field from './field';
import patient from './patient';

export default combineReducers({
  currentUser,
  error,
  field,
  patient,
});

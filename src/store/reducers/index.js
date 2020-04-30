import {combineReducers} from 'redux';
import currentUser from './currentUser';
import error from './error';
import field from './field';

export default combineReducers({
  currentUser,
  error,
  field,
});

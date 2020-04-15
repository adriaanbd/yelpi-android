import {combineReducers} from 'redux';
import currentUser from './currentUser';
import error from './error';

export default combineReducers({
  currentUser,
  error,
});

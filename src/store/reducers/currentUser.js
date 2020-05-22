import {SET_CURRENT_USER} from '../actions/types';

export const initialState = {
  authenticated: false,
  data: null,
};

export default (state = initialState, action) => {
  if (action.type === SET_CURRENT_USER) {
    return action.user;
  }
  return state;
};

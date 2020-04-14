import {SET_CURRENT_USER} from '../actions/types';

const initialState = {
  authenticated: false,
  data: {},
};

export default (state = initialState, action) => {
  if (action.type === SET_CURRENT_USER) {
    return {
      authenticated: true,
      data: action.user,
    };
  }
  return state;
};

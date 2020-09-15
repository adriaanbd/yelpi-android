import {SET_NEXT_FIELD, SET_PREV_FIELD} from './types';

export const setNextField = (fieldsType) => ({
  type: SET_NEXT_FIELD,
  fieldsType
});

export const setPreviousField = (fieldsType) => ({
  type: SET_PREV_FIELD,
  fieldsType
});

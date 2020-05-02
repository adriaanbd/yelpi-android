import {SET_PREV_FIELD, SET_NEXT_FIELD} from '../actions/types';

const fields = [
  'name',
  'age',
  'gender',
  'relationship',
  'physicians',
  'weight',
  'mentalState',
  'mentalHealth',
  'physicalHealth',
  'locomotion',
  'generalHealth',
];

export default (state = 'name', action) => {
  const {type} = action;
  let index;
  switch (type) {
    case SET_PREV_FIELD:
      index = fields.indexOf(state);
      const prevIndex = index - 1;
      return fields[prevIndex];
    case SET_NEXT_FIELD:
      index = fields.indexOf(state);
      const nextIndex = index + 1;
      return fields[nextIndex];
    default:
      return state;
  }
};

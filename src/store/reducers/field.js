import {SET_PREV_FIELD, SET_NEXT_FIELD} from '../actions/types';

export const fields = [
  'nome',
  'sobrenome',
  'birthdate',
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

export default (state = 'nome', action) => {
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
      return nextIndex === fields.length ? fields[0] : fields[nextIndex];
    default:
      return state;
  }
};

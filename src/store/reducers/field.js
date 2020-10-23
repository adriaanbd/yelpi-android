import {SET_PREV_FIELD, SET_NEXT_FIELD} from '../actions/types';

const fields = {
  patientFields: [
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
  ],
  medicationsFields: ['name', 'frequency', 'duration', 'time'],
};

export default (state = 'nome', action) => {
  const {type} = action;
  let index;
  const fieldsType = action.fieldsType;
  switch (type) {
    case SET_PREV_FIELD:
      index = fields[fieldsType].indexOf(state);
      const prevIndex = index - 1;
      return fields[fieldsType][prevIndex];
    case SET_NEXT_FIELD:
      console.log('FIELDS LIST', fieldsType, fields[fieldsType]);
      index = fields[fieldsType].indexOf(state);
      const nextIndex = index + 1;
      return nextIndex === fields[fieldsType].length
        ? fields[fieldsType][0]
        : fields[fieldsType][nextIndex];
    default:
      return state;
  }
};

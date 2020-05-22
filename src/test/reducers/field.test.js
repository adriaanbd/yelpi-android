import { SET_NEXT_FIELD, SET_PREV_FIELD} from '../../store/actions/types';
import fieldReducer, {fields} from '../../store/reducers/field';

describe('fieldReducer', () => {
  test('returns default state wich is nome', () => {
    const action = {
      type: 'SET_NO_FIELD'
    };

    expect(fieldReducer('nome', action)).toBe('nome');
  });

  test('returns next field in the fields array', () => {
    const action = {
      type: SET_NEXT_FIELD
    };

    const initialState = 'sobrenome';

    expect(fieldReducer(initialState, action)).toBe('birthdate');
  });

  test('returns previous field in the fields array', () => {
    const action = {
      type: SET_PREV_FIELD
    };

    const initialState = 'mentalState';

    expect(fieldReducer(initialState, action)).toBe('weight');
  });

  test('returns first field w/c is nome when current field is the last', () => {
    const action = {
      type: SET_NEXT_FIELD
    };

    const initialState = 'generalHealth';

    expect(fieldReducer(initialState, action)).toBe('nome');
  });
})
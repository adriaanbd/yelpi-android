import { SET_NEXT_FIELD, SET_PREV_FIELD } from '../../store/actions/types';
import { setNextField, setPreviousField } from '../../store/actions/field';

describe('setNextField action', () => {
  test('returns the correct action object', () => {
    const action = setNextField();
    expect(action.type).toBe(SET_NEXT_FIELD);
  })
});

describe('setPreviousField action', () => {
  test('returns the correct action object', () => {
    const action = setPreviousField();
    expect(action.type).toBe(SET_PREV_FIELD);
  })
});
import errorReducer from '../../store/reducers/error';
import {SET_ERROR} from '../../store/actions/types';

describe('errorReducer', () => {
  test('returns default state which is null', () => {
    const action = {type: 'SET_NO_ERROR'};
    expect(errorReducer(null, action)).toBe(null);
  });

  test('returns error string', () => {
    const error = 'Unauthorized access';

    const action = {
      type: SET_ERROR,
      error,
    };

    expect(errorReducer(null, action)).toBe(error);
  })
})
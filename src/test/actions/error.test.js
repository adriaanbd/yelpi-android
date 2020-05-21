import { SET_ERROR } from '../../store/actions/types';
import { setError } from '../../store/actions/error';

describe('setError action', () => {
  test('returns the right action object', () => {
    const error = 'Unauthorized';
    const action = setError(error);
    
    expect(action.error).toBe(error);

    expect(action.type).toBe(SET_ERROR);
  });
} );
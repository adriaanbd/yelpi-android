import currentUserReducer, { initialState} from '../../store/reducers/currentUser';
import {SET_CURRENT_USER} from '../../store/actions/types'

describe('currentUserReducer', () => {
  test('returns default state', () => {
    const action = {type: 'SET_NO_USER'};

    expect(currentUserReducer(initialState, action)).toBe(initialState);
  });

  test('returns new currentUser', () => {
    const user = {
      authenticated: true,
      data: {
        given_name: 'Pablo',
        last_name: 'Escobar'
      }
    };
    const action = {
      type: SET_CURRENT_USER,
      user
    };
    expect(currentUserReducer(initialState, action)).toBe(user);
  })
});
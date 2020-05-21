import {setCurrentUser} from '../../store/actions/user';
import {SET_CURRENT_USER} from '../../store/actions/types';

describe('setCurrentUser action', () => {
  test('returns the right action', () => {
    const user = {
      authenticated: true,
      data: {
        given_name: 'Pablo',
        last_name: 'Escobar',
      },
    };

    expect(setCurrentUser(user)).toEqual({
      type: SET_CURRENT_USER,
      user,
    });
  });
});

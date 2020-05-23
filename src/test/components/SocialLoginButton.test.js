import React from 'react';
import {Button} from 'react-native-elements';
import {shallow} from 'enzyme';
import SocialLoginButton from '../../components/SocialLoginButton';

describe('SocialLoginButton', () => {
  test('should render properly', () => {
    const name = 'Pablo'
    const wrapper = shallow(<SocialLoginButton name={name} />);

    expect(wrapper.containsMatchingElement(<Button />)).toBe(true);
  });
});

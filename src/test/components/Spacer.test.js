import { shallow } from 'enzyme';
import { View } from 'react-native';
import Spacer from '../../components/Spacer';

describe('Spacer', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Spacer space={80} />);

    expect(wrapper.containsMatchingElement(<View />)).toBe(true)

    expect(wrapper).toMatchSnapshot();
  })
})
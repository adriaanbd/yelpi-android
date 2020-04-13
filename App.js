import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ResolveStartScreen from './src/screens/ResolveStartScreen';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';

const switchNavigator = createSwitchNavigator({
  InitFlow: createSwitchNavigator({
    ResolveStartScreen,
    AuthFlow: createStackNavigator({
      AccountScreen,
      SignupScreen,
    }),
  }),
});

export default createAppContainer(switchNavigator);

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StartScreen from './src/screens/StartScreen';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';

const switchNavigator = createSwitchNavigator({
  InitFlow: createSwitchNavigator({
    StartScreen,
    AuthFlow: createStackNavigator({
      AccountScreen,
      SignupScreen,
    }),
  }),
});

export default createAppContainer(switchNavigator);

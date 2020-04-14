import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import ResolveStartScreen from './src/screens/ResolveStartScreen';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import configureStore from './src/store/createStore';

const switchNavigator = createSwitchNavigator({
  InitFlow: createSwitchNavigator({
    ResolveStartScreen,
    AuthFlow: createStackNavigator({
      AccountScreen: {
        screen: AccountScreen,
        navigationOptions: {
          header: () => null,
        },
      },
      SignupScreen,
    }),
  }),
});

const store = configureStore();

const App = createAppContainer(switchNavigator);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

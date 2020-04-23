import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
// import ResolveStartScreen from './src/screens/Auth/ResolveStartScreen';
import AccountScreen from './src/screens/Auth/AccountScreen';
import SignupScreen from './src/screens/Auth/SignupScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import configureStore from './src/store/createStore';
import HomeScreen from './src/screens/HomeScreen';
import ResolveAuth from './src/screens/Resolvers/ResolveAuth';
import {setNavigator} from './src/utils/navigationRef';
import {createStackNavigator} from 'react-navigation-stack';

const switchNavigator = createSwitchNavigator({
  InitFlow: createSwitchNavigator({
    // ResolveStartScreen, //disabled for dev purposes
    ResolveAuth,
    AuthFlow: createStackNavigator({
      AccountScreen: {
        screen: AccountScreen,
        navigationOptions: {
          header: () => null,
        },
      },
      SignupScreen: {
        screen: SignupScreen,
        navigationOptions: {
          headerTitle: () => null,
          headerStyle: {
            height: 32,
          },
        },
      },
      LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
          headerTitle: () => null,
          headerStyle: {
            height: 32,
          },
        },
      },
    }),
  }),
  HomeScreen,
});

const store = configureStore();

const App = createAppContainer(switchNavigator);

export default () => (
  <Provider store={store}>
    <App ref={navigator => setNavigator(navigator)} />
  </Provider>
);

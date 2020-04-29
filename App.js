import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import ResolveStartScreen from './src/screens/Resolvers/ResolveStartScreen';
import AccountScreen from './src/screens/Auth/AccountScreen';
import SignupScreen from './src/screens/Auth/SignupScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import SuccessScreen from './src/screens/Auth/SuccessScreen';
import configureStore from './src/store/createStore';
import HomeScreen from './src/screens/HomeScreen';
import ResolveAuth from './src/screens/Resolvers/ResolveAuth';
import AddNewPatientScreen from './src/screens/AddNewPatientScreen';
import {setNavigator} from './src/utils/navigationRef';
import {createStackNavigator} from 'react-navigation-stack';

const switchNavigator = createSwitchNavigator({
  InitFlow: createSwitchNavigator({
    ResolveStartScreen,
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
      SuccessScreen: {
        screen: SuccessScreen,
        navigationOptions: {
          header: () => null,
        },
      },
    }),
  }),
  HomeScreen,
  AddNewPatientScreen,
});

const store = configureStore();

const App = createAppContainer(switchNavigator);

export default () => (
  <Provider store={store}>
    <App ref={navigator => setNavigator(navigator)} />
  </Provider>
);

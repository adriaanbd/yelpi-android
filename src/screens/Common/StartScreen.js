import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';

const SplashScreen = () => {
  const currentUser = useSelector(state => state.currentUser.authenticated);
  console.log('here is the user', currentUser);
  return (
    <View style={styles.container}>
      {currentUser ? (
        <Text style={styles.title}>SUCCESS SCREEN</Text>
      ) : (
        <Text style={styles.title}>SPLASH SCREEN</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#245796',
    paddingHorizontal: 90,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
});

export default SplashScreen;

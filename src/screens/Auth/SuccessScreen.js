import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {navigate} from '../../utils/navigationRef';

const SuccessScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('HomeScreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACCOUNT CREATED SUCCESSFULLY!</Text>
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

export default SuccessScreen;

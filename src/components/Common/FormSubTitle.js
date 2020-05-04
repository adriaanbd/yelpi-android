import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const FormSubTitle = ({title1, title2}) => {
  return (
    <View style={styles.container}>
      <Text style={{...styles.title, ...styles.primary}}>{title1}</Text>
      <Text style={styles.title}>{title2}</Text>
    </View>
  );
};

export default FormSubTitle;

const blue = '#245796';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: blue,
    fontFamily: 'Montserrat',
    lineHeight: 37,
  },
});

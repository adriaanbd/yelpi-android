import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const FormTitle = ({title1, title2}) => {
  return (
    <View style={styles.titleBox}>
      <Text style={styles.title}>{title1}</Text>
      <Text style={{...styles.title, ...styles.conta}}>{title2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBox: {
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    lineHeight: 48,
    color: '#245796',
    fontFamily: 'Montserrat',
  },
  conta: {
    fontWeight: 'bold',
  },
});

export default FormTitle;
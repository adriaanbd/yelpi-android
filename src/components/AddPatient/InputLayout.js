import React from 'react';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

const InputLayout = ({children, prev, next, left}) => {
  return (
    <View style={styles.container}>
      {left ? <Icon name="caretleft" type="antdesign" onPress={prev} /> : null}
      {children}
      <Icon name="caretright" type="antdesign" onPress={next} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
});

export default InputLayout;

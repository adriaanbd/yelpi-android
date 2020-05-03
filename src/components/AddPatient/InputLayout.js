import React from 'react';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

const InputLayout = ({children, prev, next, left}) => {
  return (
    <View style={styles.container}>
      {left ? (
        <Icon
          name="caretleft"
          type="antdesign"
          onPress={prev}
          color={styles.iconColor.color}
        />
      ) : (
        <View style={styles.emptyView} />
      )}
      {children}
      <Icon
        name="caretright"
        type="antdesign"
        onPress={next}
        color={styles.iconColor.color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  emptyView: {
    width: 24,
  },
  iconColor: {
    color: '#245796',
  },
});

export default InputLayout;

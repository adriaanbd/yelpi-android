import React from 'react';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const InputLayout = ({children, prev, next}) => {
  const {field} = useSelector(state => state);
  const isName = field === 'name';
  return (
    <View style={styles.container}>
      {!isName ? (
        <Icon
          name="caretleft"
          type="antdesign"
          onPress={prev}
          color={styles.iconColor.color}
        />
      ) : (
        <View style={styles.emptyView} />
      )}
      <View style={styles.childrenContainer}>{children}</View>
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
    alignItems: 'center',
  },
  emptyView: {
    width: 24,
  },
  iconColor: {
    color: '#245796',
  },
  childrenContainer: {
    width: 335,
    alignItems: 'center',
  },
});

export default InputLayout;

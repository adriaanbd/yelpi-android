import React from 'react';
import {View} from 'react-native';

const Spacer = ({children, space}) => {
  const height = space || 25;
  return <View style={{height}}>{children}</View>;
};

export default Spacer;

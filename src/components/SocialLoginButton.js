import React from 'react';
import {Button} from 'react-native-elements';

const SocialLoginButton = ({name}) => {
  return (
    <Button
      title={`Log in with ${name}`}
      buttonStyle={style.button}
      titleStyle={style.title}
    />
  );
};

const style = {
  button: {
    width: 143,
    height: 33,
    marginVertical: 14,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 12,
  },
};

export default SocialLoginButton;

import React, {useEffect} from 'react';
import StartScreen from '../Common/StartScreen';
import {navigate} from '../../utils/navigationRef';

const ResolveStartScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('ResolveAuth');
    }, 3000);
  }, []);

  return <StartScreen />;
};

export default ResolveStartScreen;

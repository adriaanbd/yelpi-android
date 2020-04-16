import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {resolveAuth} from '../../store/thunks/resolvers';

const ResolveAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resolveAuth());
  }, []);
  return null;
};

export default ResolveAuth;

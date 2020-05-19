import axios from 'axios';
import decode from 'jwt-decode';
import moment from 'moment';

const baseUrl = 'https://mighty-ocean-68056.herokuapp.com';

export const sendRequest = async (method, path, data) => {
  const url = `${baseUrl}/${path}`;
  const res = await axios[method](url, data);
  return res;
};

const checkIfTokenExp = decoded => {
  const expirationTime = moment.unix(decoded.exp);
  const nowTime = moment();
  return expirationTime < nowTime;
};

export const setAuthToken = token => {
  if (token && checkIfTokenExp(decode(token))) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const sendAuthorizedRequest = async (
  method,
  path,
  token,
  data = null,
) => {
  setAuthToken(token);
  const result = await axios[method](`${baseUrl}/${path}`, data);

  return result;
};

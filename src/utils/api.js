import axios from 'axios';
import decode from 'jwt-decode';
import moment from 'moment';


const baseUrl = "http://f3143022531f.ngrok.io";

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
  const expired = checkIfTokenExp(decode(token));
  if (token && !expired) {
    console.log('inside the IF', expired);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    console.log('inside the ELSE', expired);
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

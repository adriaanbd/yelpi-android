import axios from 'axios';

// const baseUrl = 'http://86d06562.ngrok.io'; // r
const baseUrl = 'http://b0e4e02e.ngrok.io'; // a

export const sendRequest = async (method, path, data) => {
  const url = `${baseUrl}/${path}`;
  const res = await axios[method](url, data);
  return res;
};

export const setAuthToken = token => {
  if (token) {
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

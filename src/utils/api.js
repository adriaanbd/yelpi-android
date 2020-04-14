import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const sendRequest = async (path, method, data) => {
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

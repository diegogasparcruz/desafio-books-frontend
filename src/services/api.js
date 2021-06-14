import axios from 'axios';
import { parseCookies } from 'nookies';
import { URL_API } from 'utils/constants';

export function getAPICliet(ctx) {
  const { '@ioasys.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: URL_API,
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}

export const api = getAPICliet();

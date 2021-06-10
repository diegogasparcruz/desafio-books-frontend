import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAPICliet(ctx) {
  const { '@ioasys.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'https://books.ioasys.com.br/api/v1',
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}

export const api = getAPICliet();

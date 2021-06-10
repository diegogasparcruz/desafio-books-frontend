import { destroyCookie, parseCookies } from 'nookies';
import { AUTH_TOKEN, USER_TOKEN } from '../utils/constants';
import { api } from './api';

export async function signIn({ email, password }) {
  return api.post('auth/sign-in', { email, password });
}

export function getUser() {
  const { [USER_TOKEN]: user } = parseCookies();

  return user ? JSON.parse(user) : null;
}

export function logout() {
  destroyCookie(undefined, AUTH_TOKEN);
  destroyCookie(undefined, USER_TOKEN);
}

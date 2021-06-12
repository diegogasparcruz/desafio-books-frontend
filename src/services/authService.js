import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { AUTH_TOKEN, USER_TOKEN } from '../utils/constants';
import { api } from './api';

export async function signIn({ email, password }) {
  const response = {
    data: null,
    error: null,
  };

  try {
    const { data, headers } = await api.post('auth/sign-in', {
      email,
      password,
    });

    response.data = data;

    setCookie(undefined, AUTH_TOKEN, headers.authorization, {
      maxAge: 60 * 60 * 24, // 1 day
    });

    setCookie(undefined, USER_TOKEN, JSON.stringify(data), {
      maxAge: 60 * 60 * 24, // 1 day
    });

    api.defaults.headers['Authorization'] = `Bearer ${headers.authorization}`;
  } catch (err) {
    response.error = 'Erro interno do servidor';

    if (err.response) {
      response.error = err.response.data.errors.message;
    }
  }

  return response;
}

export function getUser() {
  const { [USER_TOKEN]: user } = parseCookies();

  return user ? JSON.parse(user) : null;
}

export function logout() {
  destroyCookie(undefined, AUTH_TOKEN);
  destroyCookie(undefined, USER_TOKEN);
}

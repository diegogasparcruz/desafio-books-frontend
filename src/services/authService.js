import { destroyCookie, parseCookies, setCookie } from 'nookies';
import {
  AUTH_TOKEN,
  USER_TOKEN,
  AUTH_REFRESH,
  MAX_AGE_COOKIE,
} from 'utils/constants';
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
      maxAge: MAX_AGE_COOKIE,
    });

    setCookie(undefined, AUTH_REFRESH, headers['refresh-token'], {
      maxAge: MAX_AGE_COOKIE,
    });

    setCookie(undefined, USER_TOKEN, JSON.stringify(data), {
      maxAge: MAX_AGE_COOKIE,
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
  destroyCookie(undefined, AUTH_REFRESH);
  destroyCookie(undefined, USER_TOKEN);
}

export async function refreshToken() {
  const response = {
    data: null,
    error: null,
  };

  try {
    const { [AUTH_REFRESH]: refresh } = parseCookies(undefined, AUTH_REFRESH);
    const { headers } = await api.post('/auth/refresh-token', {
      refreshToken: refresh,
    });

    setCookie(undefined, AUTH_TOKEN, headers.authorization, {
      maxAge: MAX_AGE_COOKIE,
    });

    setCookie(undefined, AUTH_REFRESH, headers['refresh-token'], {
      maxAge: MAX_AGE_COOKIE,
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

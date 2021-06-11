import { createContext, useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { setCookie } from 'nookies';

import * as authService from '../services/authService';
import { api } from '../services/api';
import { AUTH_TOKEN, USER_TOKEN } from '../utils/constants';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const response = authService.getUser();

    if (response) {
      setUser(response);
    }
  }, []);

  async function signIn({ email, password }) {
    try {
      const { data, headers } = await authService.signIn({ email, password });

      setCookie(undefined, AUTH_TOKEN, headers.authorization, {
        maxAge: 60 * 60 * 24, // 1 day
      });

      setCookie(undefined, USER_TOKEN, JSON.stringify(data), {
        maxAge: 60 * 60 * 24, // 1 day
      });

      api.defaults.headers['Authorization'] = `Bearer ${headers.authorization}`;

      setUser(data);

      Router.push('/');
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

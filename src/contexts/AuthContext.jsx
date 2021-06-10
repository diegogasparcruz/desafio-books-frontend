import { createContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { parseCookies, setCookie } from 'nookies';

import * as authService from '../services/authService';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const isAuthenticated = !!user;

  useEffect(async () => {
    const { 'ioasys.token': token } = parseCookies();

    if (token) {
      console.log(token);
    }
  }, []);

  async function signIn({ email, password }) {
    try {
      const { data, headers } = await authService.signIn({ email, password });

      setCookie(undefined, 'ioasys.token', headers.authorization, {
        maxAge: 60 * 60 * 24, // 1 day
      });

      setCookie(undefined, 'ioasys.user', JSON.stringify(data), {
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
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

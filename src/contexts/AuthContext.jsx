import { createContext, useEffect, useState } from 'react';
import Router from 'next/router';

import * as authService from '../services/authService';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const response = authService.getUser();

    if (response) {
      setUser(response);
    }
  }, []);

  async function signIn({ email, password }) {
    setLoading(true);

    const response = await authService.signIn({ email, password });
    setError('');

    if (response.data) {
      setUser(response.data);
      Router.push('/');
    } else {
      setError(response.error);
    }
    setLoading(false);
  }

  function logout() {
    authService.logout();
    Router.push('/login');
  }

  return (
    <AuthContext.Provider value={{ signIn, logout, user, error, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

import { api } from './api';

export async function signIn({ email, password }) {
  return api.post('auth/sign-in', { email, password });
}

import React from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';

import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';

import { Container } from './styles';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn, error, loading } = useAuth();

  async function handleSignIn(data) {
    await signIn(data);
  }

  return (
    <Container>
      <Head>
        <title>Ioasys Books | Login</title>
      </Head>

      <main>
        <Logo />
        <form onSubmit={handleSubmit(handleSignIn)}>
          <Input {...register('email')} label="Email" name="email" />
          <Input
            {...register('password')}
            label="Senha"
            type="password"
            name="password"
            error={error}
          >
            <Button type="submit" label="Entrar" loading={loading} />
          </Input>
        </form>
      </main>
    </Container>
  );
}

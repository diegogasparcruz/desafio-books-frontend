import React, { useContext } from 'react';
import Head from 'next/head';

import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';

import { Container } from './styles';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

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
          >
            <button type="submit">Entrar</button>
          </Input>
        </form>
      </main>
    </Container>
  );
}

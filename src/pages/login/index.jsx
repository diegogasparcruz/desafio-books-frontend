import React from 'react';
import Head from 'next/head';

import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';

import { Container } from './styles';

export default function Login() {
  function handleSignIn() {}

  return (
    <Container>
      <Head>
        <title>Ioasys Books | Login</title>
      </Head>

      <main>
        <Logo />
        <form onSubmit={handleSignIn}>
          <Input label="Email" name="email" />
          <Input label="Senha" type="password" name="password">
            <button type="submit">Entrar</button>
          </Input>
        </form>
      </main>
    </Container>
  );
}

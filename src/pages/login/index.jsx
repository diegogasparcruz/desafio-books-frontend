import React from 'react';
import { useForm } from 'react-hook-form';
import { parseCookies } from 'nookies';
import { useAuth } from 'hooks/useAuth';
import { AUTH_TOKEN } from 'utils/constants';

import { Input } from 'components/Input';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { Loading } from 'components/Loading';

import { Container } from './styles';

export default function Login({ sessionExpiration }) {
  const { register, handleSubmit } = useForm();
  const { signIn, error, loading, handleSessionExpiration } = useAuth();
  const loadingRefresh = loading && sessionExpiration;

  handleSessionExpiration(sessionExpiration);

  async function handleSignIn(data) {
    await signIn(data);
  }

  return (
    <Container isLoading={loadingRefresh}>
      <main>
        <Logo />
        <form onSubmit={handleSubmit(handleSignIn)}>
          <Input
            {...register('email')}
            label="Email"
            name="email"
            disabled={loadingRefresh}
          />
          <Input
            {...register('password')}
            label="Senha"
            type="password"
            name="password"
            error={error}
            disabled={loadingRefresh}
          >
            <Button
              type="submit"
              label="Entrar"
              loading={loading && !sessionExpiration}
              disabled={loadingRefresh}
            />
          </Input>
        </form>
      </main>

      {loadingRefresh && <Loading size={4} alignCenter color="white" />}
    </Container>
  );
}

export const getServerSideProps = async ctx => {
  const { [AUTH_TOKEN]: token } = parseCookies(ctx);

  if (token && !ctx.query.sessionExpiration) {
    return {
      redirect: {
        destination: '/',
        permantent: false,
      },
    };
  }

  return {
    props: {
      sessionExpiration: !!ctx.query.sessionExpiration,
      title: 'Ioasys Books | Login',
      metaDescription: 'Faça login para acessar todos os livros',
    },
  };
};

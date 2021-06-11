import { useContext } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import * as authService from '../services/authService';
import { AuthContext } from '../contexts/AuthContext';
import { AUTH_TOKEN } from '../utils/constants';

import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

import { Container, Content, Header, Main, Footer } from '../styles/pages/Home';

export default function Home() {
  const { user } = useContext(AuthContext);

  function logout() {
    authService.logout();
    Router.push('/login');
  }

  return (
    <Container>
      <Head>
        <title>Ioasys Books | Home</title>
      </Head>
      <Content>
        <Header>
          <Logo themeColor="dark" />
          <p>
            Bem vindo,<span> {user?.name}!</span>
          </p>
          <Button onClick={logout}>
            <img src="icons/logout.svg" alt="Logout" />
          </Button>
        </Header>

        <Main>
          <Card
            title="A dolorem itaque"
            authors="Yango Moreira Filho"
            pageCount="1042"
            publisher="Pereira - Carvalho"
            published="1998"
          >
            <img
              src="https://files-books.ioasys.com.br/Book-9.jpg"
              alt="Livro"
            />
          </Card>
          <Card
            title="A dolorem itaque"
            authors="Yango Moreira Filho"
            pageCount="1042"
            publisher="Pereira - Carvalho"
            published="1998"
          >
            <img
              src="https://files-books.ioasys.com.br/Book-9.jpg"
              alt="Livro"
            />
          </Card>
          <Card
            title="A dolorem itaque"
            authors="Yango Moreira Filho"
            pageCount="1042"
            publisher="Pereira - Carvalho"
            published="1998"
          >
            <img
              src="https://files-books.ioasys.com.br/Book-9.jpg"
              alt="Livro"
            />
          </Card>
          <Card
            title="A dolorem itaque"
            authors="Yango Moreira Filho"
            pageCount="1042"
            publisher="Pereira - Carvalho"
            published="1998"
          >
            <img
              src="https://files-books.ioasys.com.br/Book-9.jpg"
              alt="Livro"
            />
          </Card>
          <Card
            title="A dolorem itaque"
            authors="Yango Moreira Filho"
            pageCount="1042"
            publisher="Pereira - Carvalho"
            published="1998"
          >
            <img
              src="https://files-books.ioasys.com.br/Book-9.jpg"
              alt="Livro"
            />
          </Card>
          <Card
            title="A dolorem itaque"
            authors="Yango Moreira Filho"
            pageCount="1042"
            publisher="Pereira - Carvalho"
            published="1998"
          >
            <img
              src="https://files-books.ioasys.com.br/Book-9.jpg"
              alt="Livro"
            />
          </Card>
          <Card
            title="A dolorem itaque"
            authors="Yango Moreira Filho"
            pageCount="1042"
            publisher="Pereira - Carvalho"
            published="1998"
          >
            <img
              src="https://files-books.ioasys.com.br/Book-9.jpg"
              alt="Livro"
            />
          </Card>
          <Card
            title="A dolorem itaque"
            authors="Yango Moreira Filho"
            pageCount="1042"
            publisher="Pereira - Carvalho"
            published="1998"
          >
            <img
              src="https://files-books.ioasys.com.br/Book-9.jpg"
              alt="Livro"
            />
          </Card>
          <Card
            title="A dolorem itaque"
            authors="Yango Moreira Filho"
            pageCount="1042"
            publisher="Pereira - Carvalho"
            published="1998"
          >
            <img
              src="https://files-books.ioasys.com.br/Book-9.jpg"
              alt="Livro"
            />
          </Card>
          <Card
            title="A dolorem itaque"
            authors="Yango Moreira Filho"
            pageCount="1042"
            publisher="Pereira - Carvalho"
            published="1998"
          >
            <img
              src="https://files-books.ioasys.com.br/Book-9.jpg"
              alt="Livro"
            />
          </Card>
        </Main>

        <Footer>
          <Button>
            <img src="icons/arrow-left.svg" alt="Previous" />
          </Button>
          <span>Página 1 de 100</span>
          <Button>
            <img src="icons/arrow-right.svg" alt="Next" />
          </Button>
        </Footer>
      </Content>
    </Container>
  );
}

export const getServerSideProps = async ctx => {
  const { [AUTH_TOKEN]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permantent: false,
      },
    };
  }

  return {
    props: {},
  };
};

import { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import { getAPICliet } from '../services/api';
import * as authService from '../services/authService';
import { usePagination } from '../hooks/usePagination';
import { useAuth } from '../contexts/AuthContext';
import { AUTH_TOKEN } from '../utils/constants';

import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

import { Container, Content, Header, Main, Footer } from '../styles/pages/Home';

export default function Home({ query, books, totalPages }) {
  const { user } = useAuth();
  const [page, setPage] = useState(Number(query.page || 1));

  usePagination(page);

  function logout() {
    authService.logout();
    Router.push('/login');
  }

  function changePage(pageChanged) {
    setPage(pageChanged);
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
          {books.map(book => (
            <Card key={book.id} book={book} />
          ))}
        </Main>

        <Footer>
          <Button onClick={() => changePage(page - 1)} disabled={page === 1}>
            <img src="icons/arrow-left.svg" alt="Previous" />
          </Button>
          <span>
            Página {page} de {Math.ceil(totalPages)}
          </span>
          <Button
            onClick={() => changePage(page + 1)}
            disabled={page === Math.ceil(totalPages)}
          >
            <img src="icons/arrow-right.svg" alt="Next" />
          </Button>
        </Footer>
      </Content>
    </Container>
  );
}

export const getServerSideProps = async ctx => {
  const { [AUTH_TOKEN]: token } = parseCookies(ctx);

  const apiClient = getAPICliet(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permantent: false,
      },
    };
  }

  const response = await apiClient.get(`/books?page=${ctx.query.page || 1}`);
  const books = response.data.data;
  const totalPages = response.data.totalPages;

  return {
    props: {
      query: { page: ctx.query.page || 1 },
      books,
      totalPages,
    },
  };
};

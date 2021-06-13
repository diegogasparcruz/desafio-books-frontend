import Head from 'next/head';
import { parseCookies } from 'nookies';
import { getAPICliet } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import { useBook } from '../hooks/useBook';
import { AUTH_TOKEN } from '../utils/constants';
import { verifyPage } from '../utils/verifyPage';

import { Button } from '../components/Button';
import { ListBooks } from '../components/ListBooks';
import { Modal } from '../components/Modal';
import { Header } from '../components/Header';

import { Container, Content, Footer } from '../styles/pages/Home';

export default function Home({ books, totalPages }) {
  const { user, logout } = useAuth();
  const {
    page,
    nextPage,
    previousPage,
    loading,
    isShowModal,
    openModal,
    book,
  } = useBook();

  return (
    <Container>
      <Head>
        <title>Ioasys Books | Home</title>
      </Head>
      <Content>
        <Header user={user} logout={logout} />

        <ListBooks books={books} onClick={openModal} loading={loading} />

        <Footer>
          <Button onClick={previousPage} disabled={page === 1} outline>
            <img src="icons/arrow-left.svg" alt="Previous" />
          </Button>
          <span>
            Página {page} de {totalPages}
          </span>
          <Button onClick={nextPage} disabled={page >= totalPages} outline>
            <img src="icons/arrow-right.svg" alt="Next" />
          </Button>
        </Footer>
      </Content>

      {isShowModal && <Modal book={book} />}
    </Container>
  );
}

export const getServerSideProps = async ctx => {
  const { [AUTH_TOKEN]: token } = parseCookies(ctx);

  const apiClient = getAPICliet(ctx);
  const limitItens = 12;
  const page = verifyPage(ctx.query.page);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permantent: false,
      },
    };
  }

  try {
    const response = await apiClient.get(
      `/books?page=${page}&amount=${limitItens}`
    );
    const books = response.data.data;
    const totalPages = Math.ceil(response.data.totalPages);

    return {
      props: {
        books,
        totalPages,
      },
    };
  } catch (err) {
    if (err.response.status === 401) {
      return {
        redirect: {
          destination: '/login?sessionExpiration=true',
          permantent: false,
        },
      };
    }
    return {
      redirect: {
        destination: '/logout',
        permantent: false,
      },
    };
  }
};

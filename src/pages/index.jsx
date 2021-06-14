import { parseCookies } from 'nookies';
import { getAPICliet } from 'services/api';
import { useAuth } from 'hooks/useAuth';
import { useBook } from 'hooks/useBook';
import { AUTH_TOKEN } from 'utils/constants';
import { verifyPage } from 'utils/verifyPage';

import { Button } from 'components/Button';
import { ListBooks } from 'components/ListBooks';
import { Modal } from 'components/Modal';
import { Header } from 'components/Header';

import { Main, Container, Content, Footer } from '../styles/pages/Home';
import { Icon } from 'components/Icon';

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
    <Main>
      <Container>
        <Content>
          <Header user={user} logout={logout} />

          <ListBooks books={books} onClick={openModal} loading={loading} />

          <Footer>
            <Button onClick={previousPage} disabled={page === 1} outline>
              <Icon name="arrow-left" />
            </Button>
            <span>
              Página {page} de {totalPages}
            </span>
            <Button onClick={nextPage} disabled={page >= totalPages} outline>
              <Icon name="arrow-right" />
            </Button>
          </Footer>
        </Content>

        {isShowModal && <Modal book={book} />}
      </Container>
    </Main>
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
    const books = response.data.data.map(book => ({
      ...book,
      authors: book.authors.join(', '),
    }));
    const totalPages = Math.ceil(response.data.totalPages);

    return {
      props: {
        books,
        totalPages,
        title: 'Ioasys Books | Home',
        metaDescription: 'Veja todos os livros da nossa coleção',
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

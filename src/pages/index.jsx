import Head from 'next/head';

import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

import { Container, Content, Header, Main, Footer } from '../styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Ioasys Books | Home</title>
      </Head>
      <Content>
        <Header>
          <Logo themeColor="dark" />
          <p>
            Bem vindo, <span>Diego Gaspar!</span>
          </p>
          <Button>
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

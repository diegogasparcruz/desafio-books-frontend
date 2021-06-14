import PropTypes from 'prop-types';

import { Container, Image, Summary, Title, Description } from './styles';

function Card({ book, onClick }) {
  return (
    <Container onClick={onClick}>
      <Image imageUrl={book.imageUrl}>
        <div className="image" />
      </Image>
      <Summary>
        <Title>
          <h1 title={book.title}>{book.title}</h1>
          <span title={book.authors}>{book.authors}</span>
        </Title>
        <Description>
          <span>{book.pageCount} páginas</span>
          <span title={book.publisher}>Editora {book.publisher}</span>
          <span>Publicado em {book.published}</span>
        </Description>
      </Summary>
    </Container>
  );
}

Card.propTypes = {
  book: PropTypes.shape({
    imageUrl: PropTypes.string,
    authors: PropTypes.string,
    pageCount: PropTypes.number,
    publisher: PropTypes.string,
    published: PropTypes.number,
    title: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export { Card };

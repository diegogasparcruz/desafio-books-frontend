import PropTypes from 'prop-types';

import { useBook } from '../../hooks/useBook';
import { Button } from '../Button';
import {
  Container,
  Overlay,
  CloseModal,
  Content,
  Summary,
  Image,
  SectionInfo,
  SectionReview,
} from './styles';

function Modal({ book }) {
  const { closeModal } = useBook();

  return (
    <Overlay>
      <CloseModal>
        <Button outline onClick={closeModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </Button>
      </CloseModal>

      <Container>
        <Content>
          <Image>
            <img
              src={book.imageUrl || 'image-unknown.svg'}
              alt="Capa do livro"
            />
          </Image>

          <Summary>
            <header>
              <h1 title={book.title}>{book.title}</h1>
              <span>{book.authors}</span>
            </header>

            <SectionInfo>
              <h3>INFORMAÇÕES</h3>
              <div>
                <span>Páginas</span>
                <span>{book.pageCount} páginas</span>
              </div>
              <div>
                <span>Editora</span>
                <span>{book.publisher}</span>
              </div>
              <div>
                <span>Publicação</span>
                <span>{book.published}</span>
              </div>
              <div>
                <span>Idioma</span>
                <span>{book.language}</span>
              </div>
              <div>
                <span>Título Original</span>
                <span>{book.title}</span>
              </div>
              <div>
                <span>ISBN-10</span>
                <span>{book.isbn10}</span>
              </div>
              <div>
                <span>ISBN-13</span>
                <span>{book.isbn13}</span>
              </div>
            </SectionInfo>

            <SectionReview>
              <h3>RESENHA DA EDITORA</h3>

              <p>
                <img src="/icons/quote.svg" alt="Citação" />
                {book.description}
              </p>
            </SectionReview>
          </Summary>
        </Content>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  book: PropTypes.shape({
    imageUrl: PropTypes.string,
    authors: PropTypes.string,
    pageCount: PropTypes.number,
    publisher: PropTypes.string,
    published: PropTypes.number,
    language: PropTypes.string,
    title: PropTypes.string,
    isbn10: PropTypes.string,
    isbn13: PropTypes.string,
    description: PropTypes.string,
  }),
};

export { Modal };

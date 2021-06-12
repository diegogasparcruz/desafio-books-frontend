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

export function Modal({ book, onClick }) {
  return (
    <Overlay>
      <CloseModal>
        <Button outline onClick={onClick}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </Button>
      </CloseModal>

      <Container>
        <Content>
          <Image>
            <img src={book.imageUrl || 'image-unknown.svg'} alt="Livro" />
          </Image>

          <Summary>
            <header>
              <h1>{book.title}</h1>
              <span>{book.authors.join(', ')}</span>
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

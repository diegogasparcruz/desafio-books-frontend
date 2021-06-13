import React from 'react';

import { Container, Image, Summary, Title, Description } from './styles';

export function Card({ book, onClick }) {
  return (
    <Container onClick={onClick}>
      <Image imageUrl={book.imageUrl}>
        <div className="image" />
      </Image>
      <Summary>
        <Title>
          <h1 title={book.title}>{book.title}</h1>
          <span title={book.authors}>{book.authors.join(', ')}</span>
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

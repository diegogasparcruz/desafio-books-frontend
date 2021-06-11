import React from 'react';

import { Container, Image, Summary, Title, Description } from './styles';

export function Card({ book }) {
  return (
    <Container>
      <Image imageUrl={book.imageUrl}>
        <div className="image" />
      </Image>
      <Summary>
        <Title>
          <h1>{book.title}</h1>
          <span>{book.authors.join(', ')}</span>
        </Title>
        <Description>
          <span>{book.pageCount} páginas</span>
          <span>Editora {book.publisher}</span>
          <span>Publicado em {book.published}</span>
        </Description>
      </Summary>
    </Container>
  );
}

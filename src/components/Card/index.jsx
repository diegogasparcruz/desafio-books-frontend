import React from 'react';

import { Container, Image, Summary, Title, Description } from './styles';

export function Card({
  children,
  title,
  authors,
  pageCount,
  publisher,
  published,
}) {
  return (
    <Container>
      <Image>{children}</Image>
      <Summary>
        <Title>
          <h1>{title}</h1>
          <span>{authors}</span>
        </Title>
        <Description>
          <span>{pageCount} páginas</span>
          <span>Editora {publisher}</span>
          <span>Publicado em {published}</span>
        </Description>
      </Summary>
    </Container>
  );
}

import React from 'react';

import { Container } from './styles';

export function Tooltip({ message }) {
  return (
    <Container>
      <span>{message}</span>
    </Container>
  );
}

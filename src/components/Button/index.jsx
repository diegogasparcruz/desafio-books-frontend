import React from 'react';

import * as S from './styles';

export function Button({ children, type, onClick }) {
  return (
    <S.Button type={type || 'button'} onClick={onClick}>
      {children}
    </S.Button>
  );
}

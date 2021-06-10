import React from 'react';

import * as S from './styles';

function Button({ children, type, onClick }) {
  return (
    <S.Button type={type || 'button'} onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default Button;

import React from 'react';

import { Container, InputWrap } from './styles';

export const Input = React.forwardRef(
  ({ children, label, type, name, ...rest }, ref) => {
    return (
      <Container>
        <InputWrap>
          <span>{label}</span>
          <input ref={ref} type={type} name={name} {...rest} />
        </InputWrap>
        {children}
      </Container>
    );
  }
);

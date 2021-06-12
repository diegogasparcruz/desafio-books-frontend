import React from 'react';

import { Tooltip } from '../Tooltip';

import { Container, InputWrap } from './styles';

export const Input = React.forwardRef(
  ({ children, label, type, name, error, ...rest }, ref) => {
    return (
      <>
        <Container>
          <InputWrap>
            <span>{label}</span>
            <input ref={ref} type={type} name={name} {...rest} />
          </InputWrap>
          {children}
        </Container>
        {error && <Tooltip message={error} />}
      </>
    );
  }
);

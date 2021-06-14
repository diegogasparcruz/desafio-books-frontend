import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip } from '../Tooltip';

import { Container, InputWrap } from './styles';

const Input = React.forwardRef(
  ({ children, label, type, name, error, ...props }, ref) => {
    return (
      <>
        <Container>
          <InputWrap>
            <span>{label}</span>
            <input ref={ref} type={type} name={name} {...props} />
          </InputWrap>
          {children}
        </Container>
        {error && <Tooltip message={error} />}
      </>
    );
  }
);

Input.propTypes = {
  children: PropTypes.element,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export { Input };

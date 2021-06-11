import React from 'react';

import * as Styles from './styles';

export function Button({
  children,
  label,
  type,
  onClick,
  outline,
  width,
  disabled,
  ...props
}) {
  return (
    <Styles.Button
      outline={outline}
      width={width}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
      {children}
    </Styles.Button>
  );
}

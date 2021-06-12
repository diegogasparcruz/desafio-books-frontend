import React from 'react';
import { Loading } from '../Loading';

import * as Styles from './styles';

export function Button({
  children,
  label,
  type,
  onClick,
  outline,
  width,
  disabled,
  loading,
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
      {loading && <Loading />}
      {!loading && label}
      {!loading && children}
    </Styles.Button>
  );
}

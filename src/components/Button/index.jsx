import PropTypes from 'prop-types';

import { Loading } from '../Loading';

import * as Styles from './styles';

function Button({
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

Button.propTypes = {
  children: PropTypes.element,
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  width: PropTypes.number,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  outline: false,
  disabled: false,
  loading: false,
  onClick: () => {},
};

export { Button };

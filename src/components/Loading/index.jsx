import PropTypes from 'prop-types';

import { Container } from './styles';

function Loading({ size, alignCenter, color }) {
  return (
    <Container size={size} alignCenter={alignCenter} color={color}>
      <div />
      <div />
      <div />
      <div />
    </Container>
  );
}

Loading.propTypes = {
  size: PropTypes.number,
  alignCenter: PropTypes.bool,
  color: PropTypes.string,
};

Loading.defaultProps = {
  size: 1,
  alignCenter: false,
  color: null,
};

export { Loading };

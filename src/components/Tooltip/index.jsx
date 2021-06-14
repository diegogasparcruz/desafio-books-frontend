import PropTypes from 'prop-types';

import { Container } from './styles';

function Tooltip({ message }) {
  return (
    <Container>
      <span>{message}</span>
    </Container>
  );
}

Tooltip.propTypes = {
  message: PropTypes.string,
};

Tooltip.defaultProps = {
  message: '',
};

export { Tooltip };

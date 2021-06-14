import PropTypes from 'prop-types';

import ArrowLeft from 'static/icons/arrow-left.svg';
import ArrowRight from 'static/icons/arrow-right.svg';
import Logout from 'static/icons/logout.svg';
import Close from 'static/icons/close.svg';
import Quote from 'static/icons/quote.svg';

const icons = {
  'arrow-left': <ArrowLeft />,
  'arrow-right': <ArrowRight />,
  logout: <Logout />,
  close: <Close />,
  quote: <Quote />,
};

function Icon({ name }) {
  return icons[name];
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

export { Icon };

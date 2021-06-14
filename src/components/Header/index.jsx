import { Icon } from 'components/Icon';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { Logo } from '../Logo';

import * as Style from './styles';

function Header({ user, logout }) {
  return (
    <Style.Header>
      <Logo color="dark" />
      <p>
        Bem vindo,<span> {user?.name}!</span>
      </p>
      <Button onClick={logout} outline>
        <Icon name="logout" />
      </Button>
    </Style.Header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  logout: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  logout: () => {},
};
export { Header };

import { Button } from '../Button';
import { Logo } from '../Logo';

import * as Style from './styles';

export function Header({ user, logout }) {
  return (
    <Style.Header>
      <Logo color="dark" />
      <p>
        Bem vindo,<span> {user?.name}!</span>
      </p>
      <Button onClick={logout} outline>
        <img src="icons/logout.svg" alt="Logout" />
      </Button>
    </Style.Header>
  );
}

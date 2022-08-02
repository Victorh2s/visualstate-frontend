import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = () => {
  return (
    <Styled.Container aria-label="Main menu">
      <MenuLink link="/login" newTab={false}>
        Entrar
      </MenuLink>
      <MenuLink link="/cadastro" newTab={false}>
        {' '}
        Criar Conta
      </MenuLink>
    </Styled.Container>
  );
};

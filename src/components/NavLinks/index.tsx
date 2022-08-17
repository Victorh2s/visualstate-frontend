import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = () => {
  return (
    <Styled.Container aria-label="Main menu">
      <MenuLink newTab={false} url="/">
        Entrar
      </MenuLink>
      <MenuLink newTab={false} url="/cadastro">
        Criar Conta
      </MenuLink>
    </Styled.Container>
  );
};

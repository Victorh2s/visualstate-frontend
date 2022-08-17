import * as Styled from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { Logout } from '@styled-icons/material-outlined';
import { useContext } from 'react';

export type NavLinksProps = {
  username?: string;
  srcImg?: string;
};

export const NavLinksID = ({ username, srcImg }: NavLinksProps) => {
  const { signOut } = useContext(AuthContext);

  const handleClick = async () => {
    await signOut();
  };

  return (
    <Styled.Container aria-label="Main menu">
      <Styled.DivUser>
        <Styled.Logo src={srcImg} />
        <Styled.User>{username}</Styled.User>
      </Styled.DivUser>

      <Styled.Logout onClick={handleClick}>
        <Logout />
      </Styled.Logout>
    </Styled.Container>
  );
};

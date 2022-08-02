import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useEffect, useState } from 'react';

export const Menu = () => {
  const [Visible, SetVisible] = useState(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    const scroll = () => {
      window.scrollY > 10 ? setBackground(true) : setBackground(false);
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  });

  const handleChangeMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    SetVisible((e) => !e);
  };
  return (
    <>
      <Styled.Button
        Visible={Visible}
        onClick={handleChangeMenu}
        aria-label="Open/Close menu"
      >
        {Visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container
        Visible={Visible}
        onClick={() => SetVisible(false)}
        aria-hidden={!SetVisible}
        Background={background}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink text="VisualState" link="#" />
            <NavLinks />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

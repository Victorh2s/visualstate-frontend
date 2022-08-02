import styled, { css, DefaultTheme } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

type Background = {
  Background: boolean;
  Visible: boolean;
};
type MenuBehaviorProps = {
  Visible: boolean;
};

const menuVisible = (
  Visible: MenuBehaviorProps['Visible'],
  theme: DefaultTheme,
) => css`
  overflow-y: ${Visible ? 'auto' : 'hidden'};
  left: ${Visible ? '0' : '-30rem'};
  @media ${theme.media.lteMedium} {
    left: ${Visible ? '0' : '-32rem'};
  }
`;

export const Container = styled.div<Background>`
  ${({ theme, Visible, Background }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    transition: all 300ms ease-in-out;
    background: ${Background ? '#07090D' : 'transparent'};

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }
    @media ${theme.media.lteMedium} {
      ${Visible && menuVisible(Visible, theme)};
      display: block;
      position: fixed;
      text-align: center;
      background: ${theme.colors.dark};
      padding: ${theme.spacings.xxlarge} 0;
      max-width: 32rem;
      height: 100rem;
      overflow-y: auto;
      right: 0;
      left: -32rem;
      transition: all 300ms ease-in-out;
      > ${SectionContainer} {
        padding-top: 0;
        padding-bottom: 0;
      }
      & ${Heading} {
      margin-top: 0;
      margin-bottom: 5rem;
      }

    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

const buttonChanger = (
  Visible: MenuBehaviorProps['Visible'],
  theme: DefaultTheme,
) => css`
   right: ${Visible ? '26rem' : '1rem'};
   color: ${Visible ? theme.colors.white : theme.colors.white};
   @media ${theme.media.lteMedium} {
    left: ${Visible ? '26rem' : '1rem'};
  }
 `;

export const Button = styled.button<MenuBehaviorProps>`
  ${({ theme, Visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: transparent;
    color: ${theme.colors.white};
    border: none;
    display: none;
    cursor: pointer;
    pointer-events: ${Visible ? 'none' : 'all'};
    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;

    }
    ${buttonChanger(Visible, theme)}
    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;

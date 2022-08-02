import styled, { css } from 'styled-components';

type MenuBehaviorProps = {
  background: boolean;
};

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
  ${({ theme, background }) => css`
  background: ${theme.colors.white};
    color: ${theme.colors.dark};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

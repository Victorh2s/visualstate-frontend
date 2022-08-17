import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
>a{
  display: block;
  text-decoration: none;
  text-align: center;
  font-size: ${theme.font.sizes.small};
  padding: ${theme.spacings.small};
  color: ${theme.colors.white};
  position: relative;
  &::after {
    content:'';
    position: absolute;
    left: 50%;
    bottom: 0.75rem;
    width: 0;
    height: 0.2rem;
    background:${theme.colors.white};
    transition: all 300ms ease-in-out;
  }
  &:hover::after {
    left: 25%;
    width: 50%;
  }
}

`}
`;

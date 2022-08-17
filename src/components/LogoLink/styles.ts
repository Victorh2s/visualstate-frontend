import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.white};
    > img {
      height: 3rem;
    }
  `}
`;

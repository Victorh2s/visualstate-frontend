import styled, { css } from 'styled-components';

export const GridElement = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background: ${theme.colors.primary};
    overflow: hidden;
  `}
`;

export const Image = styled.img`
    max-width: 100%;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    :hover{
      transform: translateY(0.5rem)
    }
`;

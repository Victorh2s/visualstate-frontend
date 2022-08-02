import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  padding: 0;
  background-image: url('/assets/uploads/details.svg');
  background-size: cover;
  background-position: center center;
    color: ${theme.colors.dark};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

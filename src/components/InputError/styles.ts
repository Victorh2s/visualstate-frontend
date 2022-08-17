import styled, { css } from 'styled-components';

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warning};
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.large};
  `}
`;

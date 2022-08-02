import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const Button = styled.button<Pick<ButtonProps, 'color'>>`
  ${({ theme, color }) => css`
    background: ${theme.colors[color]};
    border: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    cursor: pointer;
    border-radius: 1rem;
    transition: all 300ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: none;
      box-shadow: 0 0 ${theme.spacings.small} ${theme.colors[color]};
      filter: brightness(110%);
    }

    &:hover {
      filter: brightness(90%);
    }

    &:disabled {
      background: ${theme.colors.gray8};
      color: ${theme.colors.white};
      cursor: not-allowed;

      &:hover {
        filter: none;
      }
    }

    > svg {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
    }
  `}
`;

import styled, { css } from 'styled-components';

export const Form = styled.form`
`;

export const ButtonWrapper = styled.div``;

export const Container = styled.div`
    text-align: center;
    width: 35vw;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.large};

  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    > svg {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      color: ${theme.colors.gray6};
      z-index: ${theme.layers.layer1};

    }

    *:focus ~ svg {
      color: ${theme.colors.primary};

    }

  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray3};
    width: 100%;
    height: 100%;
    font-size: ${theme.font.sizes.normal};
    transition: ${theme.transitions.fast};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    background: ${theme.colors.white};
    padding-right: 3.7rem;
    border-radius: ${theme.spacings.tiny};
    outline: none;

    &::placeholder {
      visibility: hidden;
      opacity: 0;
    }

    &:focus {
      border: ${theme.spacings.xxtiny} solid ${theme.colors.primary};
      box-shadow: 0 0 ${theme.spacings.xtiny} 0 ${theme.colors.primary};
      background: ${theme.colors.white};
    }

    &:focus
      + ${Label},
      &:not(:placeholder-shown)
      + ${Label},
      &:-webkit-autofill
      + ${Label} {
      top: 0;
      transform: translate(0, -50%);
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      filter: none;
    }


  `}
`;

export const Label = styled.label<{ element: string }>`
  ${({ theme, element }) => css`
    display: inline;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
    height: ${theme.font.sizes.small};
    transition: ${theme.transitions.fast};
    background: ${theme.colors.white};
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    line-height: 1;
    z-index: ${theme.layers.layer1};
    color: ${theme.colors.gray6};
    border-radius: ${theme.spacings.tiny};

    ${
      element === 'textarea' &&
      css`
      top: ${theme.spacings.large};
      transform: translate(0, -50%);
    `
    }
  `}
`;

export const DivButton = styled.div`

`;
export const DivLink = styled.div`
  ${({ theme }) => css`

    margin-bottom: ${theme.spacings.large};
    > a{
      text-decoration: none;
    }
  `}
`;

export const button = styled.button`
  ${({ theme }) => css`

    background: ${theme.colors.primary};
    border: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    cursor: pointer;
    border-radius: 1rem;
    transition: all 300ms ease-in-out;
    display: flex;
    margin: 0 auto;

    &:focus {
      outline: none;
      box-shadow: 0 0 ${theme.spacings.small} ${theme.colors.primary};
      filter: brightness(110%);
    }

    &:hover {
      filter: brightness(90%);
    }



    > svg {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
    }
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warning};
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.medium};
  `}
`;

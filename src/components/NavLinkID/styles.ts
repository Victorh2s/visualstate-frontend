import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }

  `}
`;
export const Logo = styled.img`
  ${({ theme }) => css`
    width: 6rem;
    border-radius: 5rem;
    padding: ${theme.spacings.small} ;

  `}
`;
export const User = styled.div`
  ${({ theme }) => css`
    border-radius: 5rem;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
  `}
`;

export const Welcome = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const DivUser = styled.div`
  ${({ theme }) => css`
  display: flex;
  align-items: center;
    margin-right: 10rem;
    margin-left: -1rem;
    @media ${theme.media.lteMedium} {
      display: block;
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 5rem;
    }
  `}
`;

export const Logout = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    cursor: pointer;

  > svg {
      width: 2rem;
      height: 2rem;
      color: ${theme.colors.white};
    }
  `}
`;

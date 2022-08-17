import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`

  width: 100%;
  height: 22rem;
  overflow: hidden;
  cursor: pointer;


  `}
`;

export const Banner = styled.img`
  ${({ theme }) => css`
  width: 100%;

  `}
`;

export const GladientVertical = styled.div`
  ${({ theme }) => css`


  width: inherit;
  height: inherit;
  background: linear-gradient(to bottom, #0d0c0c 5%, transparent 100%);


  `}
`;

export const DivButtons = styled.div`
  ${({ theme }) => css`

  margin-top: -3rem;
  float: right;
  width: 10%;
  height:3rem;
  border-top-left-radius: 10px;
  background: ${theme.colors.dark};
  text-align: center;
  cursor: pointer;

  > svg {
    color: ${theme.colors.white};
  `}
`;

export const Edit = styled.button`
  ${({ theme }) => css`
  border: none;
  width: 3rem;
  height:3rem;
  background: transparent;
  cursor: pointer;

  > svg {
    color: ${theme.colors.white};
  `}
`;

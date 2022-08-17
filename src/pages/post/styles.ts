import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  padding: 5rem;
`;

export const Buttons = styled.section`
    width: 50%;
    min-height:3rem;
    background: black;
    margin: 0 auto;
    margin-bottom: -5rem;
`;

export const DivButtons = styled.button`
  ${({ theme }) => css`
  float: right;
  width: 4rem;
  height: 3rem;
  cursor: pointer;
  background: transparent;
  border: none;
  margin-right: 0.5rem;
> svg{
color: ${theme.colors.white};
}

@media ${theme.media.lteOrEqSmall} {
    > svg{
      width: 1.5rem;
}

}

  `}
`;

export const ImageDiv = styled.div`
    width: 50%;
    margin: 0 auto;

`;

export const Image = styled.img`

    width: 100%;
    background: red;
    cursor: pointer;

`;

export const Infos = styled.div`

  width: 100%;
  min-height: 15rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  margin-top: -1rem;
  text-align: center;

`;

export const Title = styled.div`
  ${({ theme }) => css`

    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.Montserrat};
    @media ${theme.media.lteOrEqSmall} {
    font-size: ${theme.font.sizes.xsmall};
}
  `}
`;

export const Text = styled.h4`

`;

export const Description = styled.div`
  ${({ theme }) => css`

  font-size: ${theme.font.sizes.small};

  @media ${theme.media.lteOrEqSmall} {
    font-size: ${theme.font.sizes.xsmall};
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
margin-top: 5rem;

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

@media ${theme.media.lteOrEqSmall} {
    font-size: ${theme.font.sizes.xsmall};
}
`}
`;

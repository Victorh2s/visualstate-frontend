import { Title as heading } from 'components/Heading/styles';
import { Container as text } from 'components/TextComponent/styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  width: 100%;
  min-height: 100vh;
  background: ${theme.colors.dark};
  padding: 0 auto;
  padding: ${theme.spacings.medium};
  display: flex;
  overflow-y: hidden;
      @media ${theme.media.lteOrEqLarge} {
      flex-flow: column wrap;
      align-content: center;
    }

  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
  width: 50%;
  border-right: white solid 0.1rem;
  background: ${theme.colors.dark};
  padding: 0 auto;
  @media ${theme.media.lteOrEqLarge} {
    width: 100%;
    border-right: none;
    border-bottom: white solid 0.1rem;
    padding: 5rem;
    margin-bottom: ${theme.spacings.hero};
    }
  `}
`;

export const Profile = styled.div`
  ${({ theme }) => css`
  padding: ${theme.spacings.medium};
  `}
`;

export const ImgProfile = styled.div`
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
`;

export const Title = styled.div`
  margin: 0 auto;

  ${heading}{
    text-align: center;
  }
`;

export const Description = styled.div`
  ${({ theme }) => css`
  border-radius: 2rem;
  color: ${theme.colors.white};
  margin: 0 auto;
  padding: ${theme.spacings.small};

  ${text}{
    font-size: ${theme.font.sizes.xsmall};
  }

  width: 30rem;
  height: 20rem;
  overflow-y: auto;



  `}
`;

export const EditTexts = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    margin: 0 auto;
    width: 30rem;
    background: red;
    text-align: center;


  `}
`;

export const ButtonEdit = styled.div`
  ${({ theme }) => css`

    margin: 0 auto;
    width: 20rem;
    background: red;
    text-align: center;
    background: ${theme.colors.white};
    border: none;
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.small};
    font-weight: 600;
    padding: ${theme.spacings.small};
    cursor: pointer;
    border-radius: 1rem;
    transition: all 300ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(50%);
    }

  `}
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;

`;

export const Posts = styled.div`
  width: 100%;
  margin: 0 auto;

`;

export const ImgContainer = styled.div`
    ${({ theme }) => css`
    margin: 0 auto;
    width: 70%;
    background: transparent;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    @media ${theme.media.lteOrEqLarge} {
      width: 100%;
      margin-left: 0;
      padding:5rem;
      grid-template-columns: 1fr;

    }
    `}
  `;

export const ButtonNewPhoto = styled.div`
  ${({ theme }) => css`
    width:50%;
    margin: 0 auto;
    background: red;
    text-align: center;
    background: ${theme.colors.dark};
    border-bottom: 0.1rem solid ${theme.colors.white};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: 600;
    padding: ${theme.spacings.small};
    cursor: pointer;
    transition: all 300ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(50%);
    }

  `}
`;

export const Gallery = styled.div`
`;

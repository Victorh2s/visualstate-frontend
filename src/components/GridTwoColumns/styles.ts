import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export type translatey = {
  translatey: number;
};

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    overflow-x: hidden;
    align-items: center;
    width: 100%;
    gap: ${theme.spacings.large};
    @media ${theme.media.lteOrEqMedium} {
      display: block;
      text-align: center;
      align-items: center;
      overflow-x: hidden;
    }
    @media ${theme.media.lteOrEqSmallest} {
      width: 70%;
  }
    ${Title} {
      margin-bottom: 0;
    }
  `}
`;

export const TextContainer = styled.div`
    width: 35rem;
    display: flex;
    overflow-x: hidden;
    margin: 0 auto;
    padding-bottom: 0.1rem;
`;

export const Ytext = styled.div<translatey>`
  ${({ theme, translatey }) => css`
    display: flex;
    transform: translateX(-${translatey}rem);
    transition: all 400ms ease-in-out;
    padding-bottom: 0.1rem;
    @media ${theme.media.lteOrEqSmallest} {
      transform: translateX(-${translatey - 11}rem);
      transition: all 400ms ease-in-out;
    }
`}
`;

export const HeadingHeight = styled.div`
 ${({ theme }) => css`
  width: 35rem;
  padding-bottom: 0.1rem;
  @media ${theme.media.lteOrEqSmallest} {
      width: 25rem;
  }
  `}
`;

export const Carrousel = styled.div`
 ${({ theme }) => css`
  height: 40rem;
  margin: 0 auto;
  overflow-y: hidden;
  @media ${theme.media.lteOrEqSmallest} {
    height: 25rem;
  }

  `}
`;

export const Yvideo = styled.div<translatey>`
  ${({ theme, translatey }) => css`
    transform: translateY(-${translatey}rem);
    transition: all 400ms ease-in-out;
    @media ${theme.media.lteOrEqMedium} {
      transform: translateY(-${translatey + 12}rem);
      transition: all 400ms ease-in-out;
  }

  `}
`;

export const SourceContainer = styled.div`
  width: 100%;
  height: 50rem;
`;

export const videos = styled.video`
  ${({ theme }) => css`
  width: 45vw;
  height: 50rem;
  @media ${theme.media.lteOrEqMedium} {
    width: 80%;
    height: 50rem;
    align-items: center;
  }
  @media ${theme.media.lteOrEqSmallest} {
    width: 60%;
    height: 50rem;
    align-items: center;
  }
    `}
`;

import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Carousel = styled.div`
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    min-width: 90vw;
    padding: ${theme.spacings.small};
    border: 0.1rem solid white;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    @media ${theme.media.lteOrEqMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteOrEqMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const SourceContainer = styled.div`

`;

export const video = styled.video`
width: 100%;
`;

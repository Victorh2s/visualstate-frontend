import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
  supersmall: (theme: DefaultTheme) => css`
  font-size: ${theme.font.sizes.xxsmall};
    ${mediaFont(theme)};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    ${mediaFont(theme)};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    ${mediaFont(theme)};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${mediaFont(theme)};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.medium};
  }
  @media ${theme.media.lteSmall} {
    font-size: ${theme.font.sizes.small};
  }
  @media ${theme.media.lteSuperSmall} {
    font-size: ${theme.font.sizes.xxsmall};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.dark : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;

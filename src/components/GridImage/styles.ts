import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
${({ theme }) => css`
padding: 2rem;
padding-bottom: 10rem;
 > ${TextComponent}{
  text-align: center;
  margin-bottom: ${theme.spacings.xhuge}
}
${HeadingContainer}{
  text-align: center;
}
`}
`;

export const Grid = styled.div`
${({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px, 1fr));
  gap: ${theme.spacings.large}
`}
`;

export const GridElement = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  transition: all 300ms ease-in-out;
  &:hover{
    transform: scale(1.2);
  }
`;

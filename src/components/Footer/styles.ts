import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
${({ theme }) => css`
  text-align: center;
  border-top: 0.2rem solid ${theme.colors.white};
  height: 6rem;
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
  a{
    color: inherit;
    text-decoration: none;
  }
  & ${TextComponent}{
  font-size: ${theme.font.sizes.small}
  }
  & ${SectionContainer}{
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 1.5rem;
  }
`}
`;

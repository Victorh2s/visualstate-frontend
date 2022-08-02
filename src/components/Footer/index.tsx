import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const Footer = () => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent text="Site fictício" />
      </SectionContainer>
    </Styled.Container>
  );
};

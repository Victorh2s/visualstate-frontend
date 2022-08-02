import { Heading } from '../Heading';
import * as Styled from './styles';

export type TwoColumnProps = {
  text: string;
  srcImg: string;
};

export const TwoColumn = ({ text, srcImg }: TwoColumnProps) => {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Heading uppercase colorDark={false} as="h2" size="medium">
          {text}
        </Heading>
      </Styled.TextContainer>
      <Styled.SourceContainer>
        <Styled.video src={srcImg} autoPlay loop muted aria-label="Video" />
      </Styled.SourceContainer>
    </Styled.Container>
  );
};

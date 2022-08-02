import * as Styled from './styles';
import { SectionContainer, SectionContainerProps } from '../SectionContainer';

export type SectionBackgroundSvgProps = {
  children: React.ReactNode | string;
};

export const SectionBackgroundSvg = ({
  children,
}: SectionBackgroundSvgProps) => {
  return (
    <Styled.Wrapper>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Wrapper>
  );
};

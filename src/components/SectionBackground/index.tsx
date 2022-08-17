import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export type SectionBackgroundProps = {
  children: React.ReactNode | string;
  background: boolean;
};

export const SectionBackground = ({
  children,
  background = false,
}: SectionBackgroundProps) => {
  return (
    <Styled.Wrapper background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Wrapper>
  );
};

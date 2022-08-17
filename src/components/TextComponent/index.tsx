import * as Styled from './styles';

export type TextComponentProps = {
  text: string;
};

export const TextComponent = ({ text }: TextComponentProps) => {
  return <Styled.Container>{text}</Styled.Container>;
};

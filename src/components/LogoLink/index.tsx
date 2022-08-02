import { Heading } from '../Heading';
import * as Styled from './styles';

export type LogoLinkProps = {
  text: string,
  srcImg?: string,
  link: string,
};

export const LogoLink = ({ text, srcImg, link  }: LogoLinkProps) => {
  return (
    <Heading size="small" >
    <Styled.Container href={link}>
      {!!srcImg && <img src={srcImg} alt={text} />}
      {!srcImg && text}
    </Styled.Container>
  </Heading>
  );
};

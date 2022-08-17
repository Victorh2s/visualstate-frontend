import Link from 'next/link';
import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  newTab?: boolean;
  url: string;
};

export const MenuLink = ({ children, newTab = false, url }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';

  return (
    <Styled.Container>
      <Link href={url} target={target}>
        {children}
      </Link>
    </Styled.Container>
  );
};

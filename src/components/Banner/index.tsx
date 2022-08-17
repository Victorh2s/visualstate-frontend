import Link from 'next/link';
import * as Styled from './styles';

export type BannerProps = {
  src?: string;
};

export const Banner = ({ src }: BannerProps) => {
  return (
    <>
      <Link href={'/dashboard/edit'}>
        <Styled.Wrapper
          aria-label="Wrapper"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${src})`,
          }}
        >
          <Styled.GladientVertical aria-label="Gladient" />
        </Styled.Wrapper>
      </Link>
    </>
  );
};

import Link from 'next/link';
import * as Styled from './styles';

export type PostsProps = {
  srcImgPost?: string;
  id?: number;
};

export const Posts = ({ srcImgPost, id }: PostsProps) => {
  return (
    <Styled.GridElement>
      <Link href={`post/${id}`}>
        <Styled.Image src={srcImgPost} />
      </Link>
    </Styled.GridElement>
  );
};

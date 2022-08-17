import { Add, Edit } from '@styled-icons/material-outlined';
import { Banner } from 'components/Banner';
import { Heading } from 'components/Heading';
import { Menu } from 'components/Menu';
import { TextComponent } from 'components/TextComponent';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { api } from 'services/api';
import * as Styled from './styles';

import { Posts } from 'components/Posts';

import { useFecthGetUsersData } from 'hooks/useFetch';

import Link from 'next/link';

export default function Home() {
  const { ['visualstate.token']: token } = parseCookies();

  const {
    data,
    username,
    description,
    logo,
    banner,
    photos,
    error,
    isFetching,
  } = useFecthGetUsersData('/user');

  console.log(token, data, username, photos);

  return (
    <>
      <Menu
        menuid={true}
        srcImg={logo ? logo : 'http://localhost:3000/assets/uploads/user.png'}
        username={username}
      />

      <Banner src={banner} />

      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Profile>
            <Styled.ImgProfile>
              <Styled.Img
                src={
                  logo ? logo : 'http://localhost:3000/assets/uploads/user.png'
                }
              />
            </Styled.ImgProfile>
            <Styled.Title>
              <Heading colorDark={false} size="small">
                {username}
              </Heading>
            </Styled.Title>
            <Styled.Description>
              <TextComponent text={description} />
            </Styled.Description>
          </Styled.Profile>
          <Link href={'dashboard/edit'}>
            <Styled.ButtonEdit>
              <Edit size={25} />
              Editar seu perfil
            </Styled.ButtonEdit>
          </Link>
        </Styled.Wrapper>
        <Styled.Posts>
          <Link href={'/new-post'}>
            <Styled.ButtonNewPhoto>
              <Add size={25} />
              Adicionar uma lembrança
            </Styled.ButtonNewPhoto>
          </Link>
          <Styled.ImgContainer>
            {photos.map((e) => (
              <Styled.Gallery key={`${e.url}${e.id}`}>
                <Posts id={e.id} srcImgPost={e.url} />
              </Styled.Gallery>
            ))}
          </Styled.ImgContainer>
        </Styled.Posts>
      </Styled.Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['visualstate.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  api.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    },
  );

  return {
    props: {},
  };
};

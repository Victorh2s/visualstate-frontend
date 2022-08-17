import { Edit, RemoveCircle } from '@styled-icons/material-outlined';
import { Menu } from 'components/Menu';
import { SectionBackground } from 'components/SectionBackground';
import * as Styled from './styles';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useFecthGetPost, useFecthGetUsersData } from 'hooks/useFetch';
import { api } from 'services/axios';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  const { Url, title, description } = useFecthGetPost(`/photo/${id}`);
  const { username, logo, isFetching } = useFecthGetUsersData('/user');

  const handleRemovePost = () => {
    api
      .delete(`/photo/${id}`)
      .then((response) => {
        toast.success('Publicação removida com sucesso');
      })
      .catch((err) => {
        toast.error('Erro ao tentar remover publicação');
      });
  };

  const handleEditPost = () => {
    router.push(`/post/edit/${id}`);
  };

  console.log(Url, title, description);

  return (
    <>
      <Menu menuid={true} srcImg={logo} username={username} />
      <SectionBackground background={true}>
        <ToastContainer />
        <Styled.Wrapper>
          <Styled.Buttons>
            <Styled.DivButtons onClick={handleRemovePost}>
              <RemoveCircle
                size={25}
                cursor="pointer"
                style={{ color: 'red' }}
              />
            </Styled.DivButtons>
            <Styled.DivButtons onClick={handleEditPost}>
              <Edit size={25} />
            </Styled.DivButtons>
          </Styled.Buttons>
          <Styled.ImageDiv>
            <Styled.Image src={Url} />
          </Styled.ImageDiv>

          <Styled.Infos>
            <Styled.Title>
              <Styled.Text>{title}</Styled.Text>
            </Styled.Title>
            <Styled.Description>{description}</Styled.Description>
          </Styled.Infos>
          <Link href={'/dashboard'}>
            <Styled.button>Voltar</Styled.button>
          </Link>
        </Styled.Wrapper>
      </SectionBackground>
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

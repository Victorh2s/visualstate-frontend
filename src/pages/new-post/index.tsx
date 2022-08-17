import { useState } from 'react';
import { SectionBackground } from 'components/SectionBackground';
import * as Styled from './styles';
import Head from 'next/head';
import { Heading } from 'components/Heading';

import { api } from 'services/axios';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

export default function Home() {
  const [image, setImage] = useState('');
  const [imagePost, setImagePost] = useState('');
  const [Title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  console.log(Title, description);

  const handleChangeImage = (e) => {
    const Banner = e.target.files[0];
    const BannerURL = URL.createObjectURL(Banner);
    setImagePost(BannerURL);
    setImage(Banner);
  };

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', image);
    formData.append('title', Title);
    formData.append('description', description);

    api.post('/photo', formData).then((response) => {
      console.log(response.data);
      if (response.data) {
        toast.success('Publicação criada com sucesso');
      }
    });
  };

  return (
    <>
      <SectionBackground background={true}>
        <Head>
          <title>VisualState</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Styled.Container>
          <ToastContainer />
          <Heading colorDark={!true} size="medium">
            Nova publicação
          </Heading>
          <Styled.Form id="useform" onSubmit={handleCreate}>
            <Styled.Wrapper>
              <Styled.InputWrapper>
                <Styled.LabelAvatar
                  htmlFor="logo"
                  style={{ cursor: 'pointer' }}
                  onChange={handleChangeImage}
                >
                  {imagePost ? <img src={imagePost} alt="Foto" /> : '+'}

                  <Styled.InputAvatar type="file" name="logo" id="logo" />
                </Styled.LabelAvatar>
              </Styled.InputWrapper>
            </Styled.Wrapper>
            <Styled.Wrapper>
              <Styled.InputWrapper>
                <Styled.Input
                  type="text"
                  name="Title"
                  id="Title"
                  placeholder={'Título'}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <Styled.Label htmlFor="Title" element="input">
                  Título
                </Styled.Label>
                {/* {<Username />} */}
              </Styled.InputWrapper>
            </Styled.Wrapper>
            <Styled.Wrapper>
              <Styled.InputWrapper>
                <Styled.Textarea
                  rows={4}
                  cols={50}
                  maxLength={500}
                  name="description"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  form="useform"
                />

                <Styled.Label htmlFor="description" element="textarea">
                  Descrição
                </Styled.Label>
                {/* {<Password />} */}
              </Styled.InputWrapper>
            </Styled.Wrapper>

            <Styled.DivButton>
              <Link href={'/dashboard'}>
                <Styled.button>Voltar</Styled.button>
              </Link>
              <Styled.button type="submit">Salvar</Styled.button>
            </Styled.DivButton>
          </Styled.Form>
        </Styled.Container>
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

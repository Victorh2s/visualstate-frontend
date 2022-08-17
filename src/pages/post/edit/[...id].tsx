import { SectionBackground } from 'components/SectionBackground';
import * as Styled from './styles';
import Head from 'next/head';
import { Heading } from 'components/Heading';
import { useEffect, useState } from 'react';
import { api } from 'services/axios';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

export default function Home() {
  const [Title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      api.get(`/photo/${id}`).then((response) => {
        console.log(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
      });
      setIsFetching(false);
    };
    getData();
  }, [id]);

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    api
      .put(`/photo/${id}`, {
        title: Title,
        description: description,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          toast.success('Publicação atualizada com sucesso :)');
        }
      })
      .catch((e) => {
        toast.error('Erro ao atualizar post');
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
            Editar Publicação
          </Heading>
          <Styled.Form id="useform" onSubmit={handleSave}>
            <Styled.Wrapper>
              <Styled.InputWrapper>
                <Styled.Input
                  type="text"
                  name="Title"
                  id="Title"
                  value={Title}
                  placeholder={'Title'}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <Styled.Label htmlFor="Username" element="input">
                  Username
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
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  form="useform"
                />

                <Styled.Label htmlFor="description" element="input">
                  Descrição
                </Styled.Label>
                {/* {<Password />} */}
              </Styled.InputWrapper>
            </Styled.Wrapper>

            <Styled.DivButton>
              <Link href={`/post/${id}`}>
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

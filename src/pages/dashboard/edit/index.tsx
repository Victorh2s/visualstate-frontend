import { SectionBackground } from 'components/SectionBackground';
import * as Styled from './styles';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import { Heading } from 'components/Heading';
import { useEffect, useState } from 'react';
import { ImageAdd } from '@styled-icons/boxicons-regular';
import { api } from 'services/axios';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { RemoveCircle } from '@styled-icons/material-outlined';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

export default function Home() {
  const [banner, setBanner] = useState('');
  const [foto, setFoto] = useState('');
  const [imageLogo, setImageLogo] = useState('');
  const [imageBanner, setImageBanner] = useState('');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      api.get('/user').then((response) => {
        setBanner(response.data.Banner?.url);
        setImageBanner(response.data.Banner?.url);
        setFoto(response.data.Logo?.url);
        setImageLogo(response.data.Logo?.url);
        setUsername(response.data.username);
        setDescription(response.data.description);
      });
      setIsFetching(false);
    };
    getData();
  }, []);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.length < 3 || username.length > 15) {
      toast.error('Username precisa ter entre 3 e 15 caracteres');
    }

    setIsFetching(true);
    handleSaveAvatar(e);
    handleSaveBanner(e);
    api
      .put('/user', {
        username: username,
        description: description,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        toast.error('Este username já existe');
      });

    toast.success('Perfil editado com sucesso');
    setIsFetching(false);
  };

  const handleChangeBanner = (e) => {
    const Banner = e.target.files[0];
    const BannerURL = URL.createObjectURL(Banner);
    setImageBanner(BannerURL);
    setBanner(Banner);
  };

  const handleSaveBanner = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', banner);

    api
      .post('/banner', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        toast.error('Erro ao tentar enviar banner', error);
      });
  };

  const HandleRemoveBanner = () => {
    api
      .delete('/banner')
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setImageBanner('');
        }
      })
      .catch((error) => {
        toast.error('Erro ao tentar enviar logo', error);
      });
  };

  const handleChangeAvatar = (e) => {
    const Foto = e.target.files[0];
    const FotoURL = URL.createObjectURL(Foto);
    setImageLogo(FotoURL);
    setFoto(Foto);
  };

  const handleSaveAvatar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('avatar', foto);

    api
      .post('/logo', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        toast.error('Erro ao tentar enviar logo', error);
      });
  };

  const HandleRemoveLogo = () => {
    api
      .delete('/logo')
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setImageLogo('');
        }
      })
      .catch((error) => {
        toast.error('Erro ao tentar enviar logo', error);
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
            Editar perfil
          </Heading>
          <Styled.Form id="useform" onSubmit={handleSave}>
            <Styled.Wrapper>
              <Styled.InputWrapper>
                <Styled.LabelBanner
                  htmlFor="banner"
                  style={{ cursor: 'pointer' }}
                >
                  {imageBanner ? (
                    <img src={imageBanner} alt="Foto" />
                  ) : (
                    <span>
                      {' '}
                      <ImageAdd size={25} />
                      3200 x 500{' '}
                    </span>
                  )}

                  <Styled.InputBanner
                    type="file"
                    name="banner"
                    id="banner"
                    onChange={handleChangeBanner}
                  />
                </Styled.LabelBanner>
              </Styled.InputWrapper>
              <RemoveCircle
                size={25}
                onClick={HandleRemoveBanner}
                cursor="pointer"
              />
            </Styled.Wrapper>
            <Styled.Wrapper>
              <Styled.InputWrapper>
                <Styled.LabelAvatar
                  htmlFor="logo"
                  style={{ cursor: 'pointer' }}
                >
                  {imageLogo ? <img src={imageLogo} alt="Foto" /> : '+'}

                  <Styled.InputAvatar
                    type="file"
                    name="logo"
                    id="logo"
                    onChange={handleChangeAvatar}
                  />
                </Styled.LabelAvatar>
              </Styled.InputWrapper>
              <RemoveCircle
                size={25}
                onClick={HandleRemoveLogo}
                cursor="pointer"
              />
            </Styled.Wrapper>
            <Styled.Wrapper>
              <Styled.InputWrapper>
                <Styled.Input
                  type="text"
                  name="Username"
                  id="Username"
                  value={username}
                  placeholder={'Username'}
                  onChange={(e) => setUsername(e.target.value)}
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

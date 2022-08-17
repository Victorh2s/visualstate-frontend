import { Email, Password } from '@styled-icons/material-outlined';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { AuthContext } from '../../contexts/AuthContext';
import Head from 'next/head';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Styled from './styles';

export const FormLogin = () => {
  const background = true;
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext);
  const [errorMessage, seterrorMessage] = useState('');
  const { register, handleSubmit } = useForm();

  async function handleSignIn(data) {
    try {
      await signIn(data);
    } catch (e) {
      seterrorMessage('Email ou senha inválido');
    }
  }

  return (
    <SectionBackground background={background}>
      <Head>
        <title>VisualState</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Styled.Container>
        <Heading colorDark={!background} size="medium">
          Entrar
        </Heading>
        <Styled.DivLink>
          <Link href={'/cadastro'}>Criar Conta</Link>
        </Styled.DivLink>
        <Styled.Form onSubmit={handleSubmit(handleSignIn)}>
          <Styled.Wrapper>
            <Styled.InputWrapper>
              <Styled.Input
                type="email"
                name="email"
                id="email"
                placeholder={'email'}
                {...register('email')}
              />

              <Styled.Label htmlFor="email" element="input">
                Email
              </Styled.Label>
              {<Email />}
            </Styled.InputWrapper>
          </Styled.Wrapper>
          <Styled.Wrapper>
            <Styled.InputWrapper>
              <Styled.Input
                type="password"
                name="password"
                id="password"
                placeholder={'password'}
                {...register('password')}
              />

              <Styled.Label htmlFor="password" element="input">
                Password
              </Styled.Label>
              {<Password />}
            </Styled.InputWrapper>
          </Styled.Wrapper>

          {!!errorMessage && (
            <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
          )}
          <Styled.DivButton>
            <Styled.button type="submit">Enviar</Styled.button>
          </Styled.DivButton>
        </Styled.Form>
      </Styled.Container>
    </SectionBackground>
  );
};

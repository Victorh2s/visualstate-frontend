import Head from 'next/head';
import { Email, Password } from '@styled-icons/material-outlined';
import { Heading } from '../Heading';
import { User } from '@styled-icons/icomoon';
import { SectionBackground } from '../SectionBackground';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../services/axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputError } from '../InputError';
import * as Styled from './styles';

const validationSchema = yup.object({
  username: yup
    .string()
    .required('Campo obrigátorio !')
    .min(3, 'Este campo deve ter no mínimo 3 caracteres !')
    .max(15, 'Este campo deve ter no máximo 15 caracteres !')
    .matches(/^[a-zA-Z0-9._\b]+$/, 'Permitido apenas letras e números !'),
  email: yup.string().email().required('Campo obrigátorio !'),
  password: yup
    .string()
    .required('Campo obrigátorio !')
    .min(6, 'Este campo deve ter no mínimo 6 caracteres !')
    .max(25, 'Este campo deve ter no máximo 25 caracteres !')
    .matches(
      /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/,
      'Este campo deve ter pelo menos 1 caractere maiúsculo, 1 caractere especial e 1 número !',
    ),
});

export const FormCadastro = () => {
  const background = true;
  const [loading, setLoading] = useState(false);
  const [errorName, seterrorName] = useState('');
  const [errorEmail, seterrorEmail] = useState('');
  const [errorPassword, seterrorPassword] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const Router = useRouter();

  async function handleSignIn(data) {
    try {
      const { username, email, password } = data;

      await api
        .post('/user', {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status !== 200) {
            throw Error(response.data);
          }
          Router.push('/');
        })
        .catch((e) => {
          seterrorMessage(e.response.data.error);
        });

      if (errorMessage) {
        console.log('parabens');
      }
    } catch (e) {
      seterrorMessage(e.response.data.error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onError(error: any) {
    seterrorName(error?.username?.message);
    seterrorEmail(error?.email?.message);
    seterrorPassword(error?.password?.message);
    console.log(error);
  }

  return (
    <SectionBackground background={background}>
      <Head>
        <title>VisualState</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Styled.Container aria-label="container">
        <Heading colorDark={!background} size="medium">
          Cadastro
        </Heading>
        <Styled.Form
          onSubmit={handleSubmit(handleSignIn, onError)}
          aria-label="form"
        >
          <Styled.Wrapper>
            <Styled.InputWrapper>
              <Styled.Input
                type="username"
                name="username"
                id="username"
                placeholder={'username'}
                {...register('username')}
              />

              <Styled.Label htmlFor="username" element="input">
                Username
              </Styled.Label>
              {<User aria-label="usersvg" />}
            </Styled.InputWrapper>
            {errors?.username?.message && <InputError>{errorName}</InputError>}
          </Styled.Wrapper>

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
              {<Email aria-label="emailsvg" />}
            </Styled.InputWrapper>
            {errors?.email?.message && <InputError>{errorEmail}</InputError>}
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
              {<Password aria-label="passwordsvg" />}
            </Styled.InputWrapper>
            {errors?.password?.message && (
              <InputError>{errorPassword}</InputError>
            )}
          </Styled.Wrapper>

          {!!errorMessage && <InputError>{errorMessage}</InputError>}
          <Styled.DivButton>
            <Styled.button type="submit">Enviar</Styled.button>
          </Styled.DivButton>
        </Styled.Form>
      </Styled.Container>
    </SectionBackground>
  );
};

// <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// <Head>
//   <title>Login</title>
// </Head>
// <div className="max-w-sm w-full space-y-8">
//   <div>
//     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//       Sign in to your account
//     </h2>
//   </div>
//   <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleSignIn)}>
//     <input type="hidden" name="remember" defaultValue="true" />
//     <div className="rounded-md shadow-sm -space-y-px">
//       <div>
//         <label htmlFor="email-address" className="sr-only">
//           Email address
//         </label>
//         <input
//           {...register('email')}
//           id="email-address"
//           name="email"
//           type="email"
//           autoComplete="email"
//           required
//           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//           placeholder="Email address"
//         />
//       </div>
//       <div>
//         <label htmlFor="password" className="sr-only">
//           Password
//         </label>
//         <input
//           {...register('password')}
//           id="password"
//           name="password"
//           type="password"
//           autoComplete="current-password"
//           required
//           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//           placeholder="Password"
//         />
//       </div>
//     </div>

//     <div className="flex items-center justify-between">
//       <div className="flex items-center">
//         <input
//           id="remember_me"
//           name="remember_me"
//           type="checkbox"
//           className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//         />
//         <label
//           htmlFor="remember_me"
//           className="ml-2 block text-sm text-gray-900"
//         >
//           Remember me
//         </label>
//       </div>

//       <div className="text-sm">
//         <a
//           href="#"
//           className="font-medium text-indigo-600 hover:text-indigo-500"
//         >
//           Forgot your password?
//         </a>
//       </div>
//     </div>

//     <div>
//       <button
//         type="submit"
//         className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//       >
//         <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
//         Sign in
//       </button>
//     </div>
//   </form>
// </div>
// </div>

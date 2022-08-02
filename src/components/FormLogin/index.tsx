import React, { useContext, useState } from 'react';
import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';
import { TextInput } from '../TextInput';
import * as Styled from './styles';
import { Button } from '../Button';
import { AuthContext } from 'context/AuthProvider';
import { useForm } from 'react-hook-form';

export type FormLoginProps = {
  errorMessage?: string;
  onLogin?: (email: string, password: string) => Promise<void>;
};

export const FormLogin = ({ errorMessage, onLogin }: FormLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const { singIn } = useContext(AuthContext);

  const handleSignIn = async (event: React.FormEvent, data) => {
    setLoading(true);
    event.preventDefault();

    console.log(data);

    setLoading(false);
  };

  return (
    <Styled.Wrapper onSubmit={handleSubmit(handleSignIn)}>
      <TextInput
        name="user-identifier"
        label="Seu e-mail"
        onInputChange={(v) => setEmail(v)}
        value={email}
        icon={<Email />}
        type="email"
        {...register('user-identifier')}
      />
      <TextInput
        name="user-password"
        label="Sua senha"
        onInputChange={(v) => setPassword(v)}
        value={password}
        icon={<Password />}
        type="password"
        {...register('user-password')}
      />

      {!!errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}

      <Styled.ButtonWrapper>
        <Button disabled={loading}>{loading ? 'Aguarde...' : 'Entrar'}</Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

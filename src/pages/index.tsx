import { FormLogin } from 'components/FormLogin';
import { Heading } from 'components/Heading';
import { useSession } from 'next-auth/react';
import * as Styled from './styles';

export default function Index() {
  const { data: session, status } = useSession();
  console.log('session', session);
  return (
    <>
      <Styled.Wrapper>
        <FormLogin />
      </Styled.Wrapper>
      <h1>Olá mundo{session && JSON.stringify(session.user.email)} </h1>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  console.log(process.env.TESTE);
  return {
    props: {},
  };
};

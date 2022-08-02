import { Authenticated } from 'hooks/useFetch';
import { createContext, useState } from 'react';
import { setCookie } from 'nookies';
import Router from 'next/router';

type User = {
  name: string;
  email: string;
  id: number;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  User: User;
  singIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [User, setUser] = useState<User | null>(null);

  const isAuthenticated = !!User;

  async function singIn({ email, password }: SignInData) {
    const { data } = Authenticated('/token', email, password);

    setCookie(undefined, 'nextauth.token', data.token, {
      maxAge: 60 * 60 * 72, // 72hr
    });
    setUser(data.user);

    Router.push('/user');
  }
  return (
    <AuthContext.Provider value={{ User, isAuthenticated, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}

import { createContext, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import axios from 'axios';
import Router from 'next/router';
import { api } from '../services/api';

type AuthContextType = {
  user: User;
  isAuthenticated: boolean;
  signIn: (data: signInData) => Promise<void>;
  signOut: () => Promise<void>;
};

type signInData = {
  email: string;
  password: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

export const AuthContext = createContext({} as AuthContextType);

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  async function signIn({ email, password }: signInData) {
    const url = 'http://localhost:3004/token';
    const response = await axios.post(url, { email, password });
    const { token, user } = await response.data;

    setCookie(undefined, 'visualstate.token', token, {
      maxAge: 60 * 60 * 72, //72hours
    });

    api.defaults.headers['Authorization'] = `Bearer ${token}`;
    setUser(user);

    Router.push('/dashboard');
  }

  async function signOut() {
    const { ['visualstate.token']: token } = parseCookies();
    destroyCookie(undefined, token, {
      path: '/',
    });

    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

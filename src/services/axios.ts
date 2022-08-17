/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { parseCookies } from 'nookies';

export const api = axios.create({
  baseURL: 'http://localhost:3004',
});

api.interceptors.request.use((config) => {
  try {
    const { 'visualstate.token': token } = parseCookies();
    console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    console.log(error);
  }
});

export function getAPIClient(ctx?: any) {
  const { 'visualstate.token': token } = parseCookies(ctx);

  api.interceptors.request.use((config) => {
    console.log(config);

    return config;
  });

  if (token) {
    api.defaults.headers.common['Authorization'] = `Token ${token}`;
  }
  return api;
}

export async function getUserData() {
  const { data } = await api.get('/user');
}

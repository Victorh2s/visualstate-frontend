import { api } from '../services/api';

import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { boolean } from 'yup/lib/locale';

export function useFecthGetUser<T = unknown>(
  url: string,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url, options)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [url, options]);

  return { data, error, isFetching };
}

type getDataUser = {
  id: number;
  username: string;
  description: string;
  email: string;
  password: string;
  Logo: {
    url: string;
    id: number;
    ulogoid: number;
  };
  Banner: {
    url: string;
    id: number;
    uBannerid: number;
  };
  Photo: [
    {
      id: number;
      url: string;
      title: string;
      description: string;
    },
  ];
};

type Photo = {
  id: number;
  url: string;
  title: string;
  description: string;
};

export function useFecthGetUsersData(
  url: string,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<getDataUser | string>('');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [banner, setBanner] = useState('');
  const [photos, setPhotos] = useState(Array<Photo>);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url, options)
      .then((response) => {
        setData(response.data);
        setUsername(response.data.username);
        setDescription(response.data.description);
        setLogo(response.data.Logo.url);
        setBanner(response.data.Banner.url);
        setPhotos(response.data.Photos);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [url, options]);

  return {
    data,
    username,
    description,
    logo,
    banner,
    photos,
    error,
    isFetching,
  };
}

export function useFecthGetPost(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState('');
  const [Url, setURL] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url, options)
      .then((response) => {
        setData(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setURL(response.data.url);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [url, options]);

  return {
    title,
    description,
    Url,
    data,
    error,
    isFetching,
  };
}

export function useFecthDeletePost(url: string, options?: AxiosRequestConfig) {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .delete(url, options)
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [url, options]);

  return {
    error,
    isFetching,
  };
}

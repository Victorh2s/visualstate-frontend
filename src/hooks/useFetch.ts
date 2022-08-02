import api from '../services/api';

import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

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

import axios, { AxiosError } from 'axios';

import { AppDispatch, setResponse } from 'store';

export const handleError = (errorMsg: unknown, dispatch: AppDispatch): void => {
  const err = errorMsg as Error | AxiosError<{ error: string }>;

  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.error : err.message;
    dispatch(setResponse({ error }));
  }
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InfoResponseType } from 'api';

export type LoadingType = {
  isFetching: boolean;
  info: string | null;
  error: string | null;
};

export const InitialState: LoadingType = {
  isFetching: false,
  info: null,
  error: null,
};

export const fetchSlice = createSlice({
  name: 'loading',
  initialState: InitialState as LoadingType,
  reducers: {
    changeFetching: (state, action: PayloadAction<boolean>): void => {
      state.isFetching = action.payload;
    },
    setResponse: (state, action: PayloadAction<InfoResponseType>): void => {
      state.error = action.payload.error;
      state.info = action.payload.info;
    },
  },
});

export const { changeFetching, setResponse } = fetchSlice.actions;

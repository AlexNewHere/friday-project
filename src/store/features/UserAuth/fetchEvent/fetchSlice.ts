import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LoadingType = {
  isFetching: boolean;
  error: string | null;
};

export const InitialState: LoadingType = {
  isFetching: false,
  error: null,
};

export const fetchSlice = createSlice({
  name: 'loading',
  initialState: InitialState as LoadingType,
  reducers: {
    changeFetching: (state, action: PayloadAction<boolean>): void => {
      state.isFetching = action.payload;
    },
    setResponse: (state, action: PayloadAction<{ error: string | null }>): void => {
      state.error = action.payload.error;
    },
  },
});

export const { changeFetching, setResponse } = fetchSlice.actions;

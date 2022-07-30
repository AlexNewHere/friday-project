import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LoadingType = {
  isFetching: boolean;
};

export const fetchSlice = createSlice({
  name: 'loading',
  initialState: { isFetching: false } as LoadingType,
  reducers: {
    changeFetching: (state, action: PayloadAction<boolean>): void => {
      state.isFetching = action.payload;
    },
  },
});

export const { changeFetching } = fetchSlice.actions;

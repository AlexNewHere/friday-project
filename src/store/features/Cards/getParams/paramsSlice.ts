import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ParamsType } from 'store';

const initialState: ParamsType = {
  packName: '',
  min: '0',
  max: '10',
  sortPacks: '',
  page: '1',
  pageCount: '10',
  userId: '',
};

export const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setParams: (
      state,
      action: PayloadAction<{ page: string; pageCount: string; userId: string }>,
    ) => {
      state.page = action.payload.page;
      state.pageCount = action.payload.pageCount;
      state.userId = action.payload.userId;
    },
  },
});

export const { setParams } = paramsSlice.actions;

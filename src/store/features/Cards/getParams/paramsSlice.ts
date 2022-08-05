import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ParamsType } from 'store';

const initialState: ParamsType = {
  packName: '',
  min: 0,
  max: 30,
  sortPacks: '',
  page: 1,
  pageCount: 10,
  user_id: '',
};

export const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setParams: (state, action: PayloadAction<ParamsType>) => action.payload,
  },
});

export const { setParams } = paramsSlice.actions;

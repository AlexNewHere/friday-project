import { createSlice } from '@reduxjs/toolkit';

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
    // setPacks: (_, action: PayloadAction<CardPacksType>): CardPacksType => action.payload,
  },
});

// export const { setPacks } = paramsSlice.actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PacksType } from 'store';

const initialState: PacksType = {
  cardPacks: [],
  cardPacksTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  page: 0,
  pageCount: 0,
};

export const packsSlice = createSlice({
  name: 'packs',
  initialState,
  reducers: {
    setPacks: (state, action: PayloadAction<PacksType>): PacksType => ({
      ...action.payload,
    }),
  },
});

export const { setPacks } = packsSlice.actions;

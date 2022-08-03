import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { cardPacksType } from 'store/index';

const initialState: cardPacksType = {
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
    setPacks: (_, action: PayloadAction<cardPacksType>): cardPacksType => action.payload,
  },
});

export const { setPacks } = packsSlice.actions;

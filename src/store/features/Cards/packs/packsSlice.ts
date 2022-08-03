import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardPacksType } from 'store';

const initialState: CardPacksType = {
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
    setPacks: (_, action: PayloadAction<CardPacksType>): CardPacksType => action.payload,
  },
});

export const { setPacks } = packsSlice.actions;

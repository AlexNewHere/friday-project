import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type cardPackType = {
  _id: string;
  user_id: string;
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
};

export type cardPacksType = {
  cardPacks: Array<cardPackType>;
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
};

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
    setPacks: (_, action: PayloadAction<cardPacksType>): cardPacksType => ({
      cardPacks: action.payload.cardPacks,
      cardPacksTotalCount: action.payload.cardPacksTotalCount,
      maxCardsCount: action.payload.maxCardsCount,
      minCardsCount: action.payload.minCardsCount,
      page: action.payload.page,
      pageCount: action.payload.pageCount,
    }),
  },
});

export const { setPacks } = packsSlice.actions;

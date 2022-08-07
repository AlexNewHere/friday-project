import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardsPackType } from 'store';

const initialState: CardsPackType = {
  cards: [],
  cardsTotalCount: 0,
  maxGrade: 0,
  minGrade: 0,
  page: 1,
  pageCount: 10,
  packUserId: '',
  packName: '',
  packId: '',
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardsPackType>): CardsPackType => ({
      ...action.payload,
    }),
  },
});

export const { setCards } = cardsSlice.actions;

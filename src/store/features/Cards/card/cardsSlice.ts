import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardsResponseType } from 'store/features/Cards/card/cardsTypes';

const initialState: CardsResponseType = {
  cards: [],
  cardsTotalCount: 0,
  maxGrade: 0,
  minGrade: 0,
  page: 0,
  pageCount: 0,
  packUserId: '',
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardsResponseType>): CardsResponseType => ({
      ...action.payload,
    }),
  },
});

export const { setCards } = cardsSlice.actions;

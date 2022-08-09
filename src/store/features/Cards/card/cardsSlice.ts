import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardsResponseType } from 'api';

const initialState: CardsResponseType = {
  cards: [],
  cardsTotalCount: 0,
  maxGrade: 0,
  minGrade: 0,
  page: 1,
  pageCount: 10,
  packUserId: '',
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardsResponseType>): CardsResponseType => ({
      ...action.payload,
    }),
    setInitialCards: (): CardsResponseType => ({
      ...initialState,
    }),
  },
});

export const { setCards, setInitialCards } = cardsSlice.actions;

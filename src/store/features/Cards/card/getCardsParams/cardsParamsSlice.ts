import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardsParamsTypes } from 'store';

const initialState: CardsParamsTypes = {
  cardAnswer: '',
  cardQuestion: '',
  cardsPack_id: '',
  min: 0,
  max: 5,
  page: 1,
  pageCount: 10,
};

export const cardsParamsSlice = createSlice({
  name: 'cardsParams',
  initialState,
  reducers: {
    setCardsParams: (state, action: PayloadAction<CardsParamsTypes>) => {
      state.page = action.payload.page;
      state.cardsPack_id = action.payload.cardsPack_id;
      state.pageCount = action.payload.pageCount;
    },
  },
});

export const { setCardsParams } = cardsParamsSlice.actions;

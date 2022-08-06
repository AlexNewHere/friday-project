import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardsParamsTypes } from 'store/features/Cards/card/getCardsParams/cardsParamsTypes';

const initialState: CardsParamsTypes = {
  cardAnswer: '',
  cardQuestion: '',
  cardsPack_id: '',
  min: 1,
  max: 4,
  page: 1,
  pageCount: 7,
};

export const cardsParamsSlice = createSlice({
  name: 'cardsParams',
  initialState,
  reducers: {
    setCardsParams: (state, action: PayloadAction<CardsParamsTypes>) => {
      state.page = action.payload.page;
      state.pageCount = action.payload.pageCount;
    },
  },
});

export const { setCardsParams } = cardsParamsSlice.actions;

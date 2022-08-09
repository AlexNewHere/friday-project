import { createAsyncThunk } from '@reduxjs/toolkit';

import { cardsAPI, GetCardType } from 'api';
import { AppDispatch, AppRootStateType, changeFetching, setCards } from 'store/index';
import { handleError } from 'untils/handleError';

export const getCardsThunk = createAsyncThunk<
  void,
  { params: GetCardType },
  { dispatch: AppDispatch; state: AppRootStateType }
>('cards/getCardsThunk', async ({ params }, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    const res = await cardsAPI.getCards(params);
    dispatch(setCards({ ...res.data }));
    dispatch(changeFetching(false));
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

export const createCardsThunk = createAsyncThunk<
  boolean | undefined,
  {
    question: string;
    answer: string;
    packId: string;
  },
  { dispatch: AppDispatch; state: AppRootStateType }
>('cards/getCardsThunk', async ({ question, answer, packId }, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    await cardsAPI.createCards({ question, answer, packId });
    dispatch(changeFetching(false));
    return true;
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

export const editCardsThunk = createAsyncThunk<
  boolean | undefined,
  {
    question: string;
    answer: string;
    cardId: string;
  },
  { dispatch: AppDispatch; state: AppRootStateType }
>('cards/getCardsThunk', async ({ question, answer, cardId }, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    await cardsAPI.editCards({ question, answer, cardId });
    dispatch(changeFetching(false));
    return true;
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

export const removeCardsThunk = createAsyncThunk<
  boolean | undefined,
  { cardId: string },
  { dispatch: AppDispatch }
>('cards/getCardsThunk', async ({ cardId }, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    await cardsAPI.removeCards({ cardId });
    dispatch(changeFetching(false));
    return true;
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

import { createAsyncThunk } from '@reduxjs/toolkit';

import { cardsAPI } from 'api';
import { AppDispatch, AppRootStateType, changeFetching, setCards } from 'store/index';
import { handleError } from 'untils/handleError';

export const getCardsThunk = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch; state: AppRootStateType }
>('cards/getCardsThunk', async (packId, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    const res = await cardsAPI.getCards(packId);
    dispatch(setCards(res.data));
    dispatch(changeFetching(false));
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

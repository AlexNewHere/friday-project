import { createAsyncThunk } from '@reduxjs/toolkit';

import { cardsAPI } from 'api';
import { AppDispatch, AppRootStateType, changeFetching, setCards } from 'store/index';
import { handleError } from 'untils/handleError';

export const getCardsThunk = createAsyncThunk<
  boolean | undefined,
  { packId: string; packName: string },
  { dispatch: AppDispatch; state: AppRootStateType }
>('cards/getCardsThunk', async ({ packId, packName }, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    const res = await cardsAPI.getCards({ packId });
    dispatch(setCards({ ...res.data, packName }));
    dispatch(changeFetching(false));
    return true;
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

import { createAsyncThunk } from '@reduxjs/toolkit';

import { packsAPI } from 'api';
import { AppDispatch, AppRootStateType, changeFetching, setPacks } from 'store/index';
import { handleError } from 'untils/handleError';

export const getPacksThunk = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch; state: AppRootStateType }
>('packs/getPacksThunk', async (_, { dispatch, getState }) => {
  dispatch(changeFetching(true));
  const { params } = getState();
  try {
    const res = await packsAPI.getPacks(params);
    dispatch(setPacks(res.data));
    dispatch(changeFetching(false));
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

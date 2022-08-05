import { createAsyncThunk } from '@reduxjs/toolkit';

import { packsAPI } from 'api';
import {
  AppDispatch,
  AppRootStateType,
  changeFetching,
  ParamsType,
  setPacks,
} from 'store/index';
import { handleError } from 'untils/handleError';

export const getPacksThunk = createAsyncThunk<
  void,
  ParamsType,
  { dispatch: AppDispatch; state: AppRootStateType }
>('packs/getPacksThunk', async (params, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    const res = await packsAPI.getPacks(params);
    dispatch(setPacks(res.data));
    dispatch(changeFetching(false));
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

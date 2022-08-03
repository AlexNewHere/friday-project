import { createAsyncThunk } from '@reduxjs/toolkit';

import { packsAPI } from 'api';
import { AppDispatch, changeFetching, setPacks } from 'store/index';
import { handleError } from 'untils/handleError';

export const getPacksThunk = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  'packs/getPacksThunk',
  async (_, { dispatch }) => {
    dispatch(changeFetching(true));
    try {
      const res = await packsAPI.getPacks();
      dispatch(setPacks(res.data));
      dispatch(changeFetching(false));
    } catch (e) {
      dispatch(changeFetching(false));
      handleError(e, dispatch);
    }
  },
);

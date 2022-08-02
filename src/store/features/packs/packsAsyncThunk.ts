import { createAsyncThunk } from '@reduxjs/toolkit';

import { packsAPI } from 'api/packsAPI/packsAPI';
import { AppDispatch } from 'store';
import { setPacks } from 'store/features/packs/packsSlice';
import { handleError } from 'untils/handleError';

export const getPacksThunk = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  'packs/getPacksThunk',
  async (_, { dispatch }) => {
    try {
      const res = await packsAPI.getPacks();
      dispatch(setPacks(res.data));
    } catch (e) {
      handleError(e, dispatch);
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';

import { packsAPI } from 'api/packsAPI/packsAPI';
import { AppDispatch } from 'store';
import { setPacks } from 'store/features/packs/packsSlice';

export const getPacksThunk = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  'packs/getPacksThunk',
  async (_, { dispatch }) => {
    try {
      const res = await packsAPI.getPacks();
      dispatch(setPacks(res.data));
      console.log(`res.data ${res.data}`);
    } catch (e) {
      console.log();
    }
  },
);

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { FormikInitialType } from 'pages';
import { ProfileType, AppDispatch } from 'store';

const initialState: ProfileType = {
  _id: null,
  email: null,
  name: null,
  avatar: null,
  publicCardPacksCount: 0,
};

export const profileUserThunk = createAsyncThunk<
  void,
  FormikInitialType,
  { dispatch: AppDispatch }
>('profile/profileUserThunk', async () => {
  const response = await loginAPI.authMe();
  console.log(response);
});

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // setAuthUserData: (_, action: PayloadAction<any>): any => action,
    // changeFetching: (state, action: PayloadAction<any>): any => action,
  },
  extraReducers: builder => {
    builder
      .addCase(profileUserThunk.pending, (state, action) => {
        console.log(action);
      })
      .addCase(profileUserThunk.fulfilled, (state, action) => {
        console.log(action);
        state.email = '';
        state.name = '';
      })
      .addCase(profileUserThunk.rejected, (state, action) => {
        console.log(action);
      });
  },
});

// export const {} = profileSlice.actions;

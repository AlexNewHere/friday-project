import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { LoginType } from 'store/features';
import { AppDispatch } from 'store/store';

const initialState: LoginType = {
  _id: null,
  email: null,
  name: null,
  avatar: null,
  publicCardPacksCount: 0,
  isAuth: false,
  isFetchLogin: true,
};

export const loginUserThunk = createAsyncThunk<void, any, { dispatch: AppDispatch }>(
  'login/loginUserThunk',
  async ({ data }, thunkAPI) => {
    try {
      const response = await loginAPI.login();
      console.log(response);
      console.log(data);
      console.log(thunkAPI);
    } catch (e: any) {
      console.log(e.message);
    }
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setAuthUserData: (_, action: PayloadAction<any>): any => action,
    changeFetching: (state, action: PayloadAction<any>): any => action,
  },
  extraReducers: builder => {
    builder
      .addCase(loginUserThunk.pending, (state, action) => {
        console.log(action);
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        console.log(action);
      });
    // .addCase(logOutUserThunk.pending, () => {})
    // .addCase(logOutUserThunk.fulfilled, () => ({}))
    // .addCase(logOutUserThunk.rejected, (_, action) => {});
  },
});

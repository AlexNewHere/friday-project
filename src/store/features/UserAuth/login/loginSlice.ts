import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  LoginType,
  AuthType,
  loginUserThunk,
  isInitializedAppThunk,
  logOutUserThunk,
} from 'store/index';

const initialState: LoginType = {
  _id: null,
  email: null,
  name: '',
  avatar: '',
  publicCardPacksCount: 0,
  isInitialized: false,
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<AuthType>): LoginType => ({
      ...action.payload,
      isInitialized: true,
      isLoggedIn: true,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(isInitializedAppThunk.fulfilled, state => {
        state.isInitialized = true;
      })
      .addCase(isInitializedAppThunk.rejected, state => {
        state.isInitialized = true;
      })
      .addCase(loginUserThunk.fulfilled, state => {
        state.isLoggedIn = true;
      })
      .addCase(logOutUserThunk.fulfilled, () => ({
        ...initialState,
        isInitialized: true,
      }))
      .addCase(logOutUserThunk.rejected, () => ({
        ...initialState,
        isInitialized: true,
      }));
  },
});

export const { setUserData } = loginSlice.actions;

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
      ...state,
      ...action.payload,
    }),
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
      })
      .addCase(isInitializedAppThunk.fulfilled, state => {
        state.isInitialized = true;
        state.isLoggedIn = true;
      })
      .addCase(isInitializedAppThunk.rejected, state => {
        state.isInitialized = true;
      })
      .addCase(logOutUserThunk.pending, (state, action) => {
        console.log(action);
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

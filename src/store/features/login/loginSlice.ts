import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  LoginType,
  AuthType,
  loginUserThunk,
  isInitializedAppThunk,
  logOutUserThunk,
} from 'store';

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
    setUserData: (_, action: PayloadAction<AuthType>): LoginType => ({
      ...action.payload,
      isLoggedIn: true,
      isInitialized: true,
    }),
    // changeFetching: (state, action: PayloadAction<any>): any => action,
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
      .addCase(isInitializedAppThunk.pending, (state, action) => {
        console.log(action);
      })
      .addCase(isInitializedAppThunk.fulfilled, (state, action) => {
        console.log(action);
        state.isInitialized = true;
      })
      .addCase(isInitializedAppThunk.rejected, (state, action) => {
        console.log(action);
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

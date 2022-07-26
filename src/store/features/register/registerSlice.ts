import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { FormikRegisterType } from 'pages';
import { RegisterType } from 'store';

const initialState: RegisterType = {
  addedUser: null,
  error: null,
};

export const registerUserThunk = createAsyncThunk<void, FormikRegisterType>(
  'register/registerUserThunk',
  async data => {
    await loginAPI.register({
      email: data.email,
      password: data.password,
    });
  },
);

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    // register
  },
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, (state, action) => {
        console.log(action);
        // isLoading: true,
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        console.log(action);
      });
  },
});

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { FormikRegisterType } from 'pages';
import { AppDispatch, RegisterType } from 'store';

const initialState: RegisterType = {
  addedUser: null,
  error: null,
};

export const registerUserThunk = createAsyncThunk<
  void,
  FormikRegisterType,
  { dispatch: AppDispatch }
>('register/registerUserThunk', async (data, { dispatch }) => {
  try {
    const response = await loginAPI.register({
      email: data.email,
      password: data.password,
    });
    const { setAddedUser } = registerSlice.actions;
    dispatch(setAddedUser(response.data));
  } catch (e) {
    console.log(e);
  }
});

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setAddedUser: (state, action) => {
      state.addedUser = action.payload;
    },
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

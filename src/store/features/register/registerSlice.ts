import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { FormikRegisterType } from 'pages';
import { AppDispatch, RegisterType, changeFetching, setResponse } from 'store';

const initialState: RegisterType = {
  addedUser: null,
  error: null,
};

export const registerUserThunk = createAsyncThunk<
  void,
  FormikRegisterType,
  { dispatch: AppDispatch }
>('register/registerUserThunk', async (data, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    const response = await loginAPI.register({
      email: data.email,
      password: data.password,
    });
    dispatch(setAddedUser(response.data));
    dispatch(changeFetching(false));
  } catch (e: any) {
    dispatch(changeFetching(false));
    dispatch(setResponse(e.response.data));
    console.log(e);
  }
});

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setAddedUser: (state, action: PayloadAction<RegisterType>) => {
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
export const { setAddedUser } = registerSlice.actions;

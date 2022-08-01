import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import {
  AppDispatch,
  AppRootStateType,
  changeFetching,
  NewPasswordType,
  setResponse,
} from 'store';

export const forgotPasswordThunk = createAsyncThunk<
  void,
  { email: string },
  { state: AppRootStateType; dispatch: AppDispatch }
>('forgot/forgotPasswordThunk', async ({ email }, { getState, dispatch }) => {
  const state = getState();
  const { message, from } = state.forgot;
  dispatch(changeFetching(true));
  try {
    const response = await loginAPI.forgot({ email, from, message });
    dispatch(changeFetching(false));
    dispatch(setResponse(response.data));
  } catch (e: any) {
    console.log(e);
    dispatch(changeFetching(false));
    dispatch(setResponse(e.response.data));
  }
});

export const newPasswordThunk = createAsyncThunk<
  void,
  NewPasswordType,
  { dispatch: AppDispatch }
>('forgot/newPasswordThunk', async ({ password, token }, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    const response = await loginAPI.newPassword({ password, token });
    dispatch(changeFetching(false));
    dispatch(setResponse(response.data));
  } catch (e: any) {
    console.log(e);
    dispatch(changeFetching(false));
    dispatch(setResponse(e.response.data));
  }
});

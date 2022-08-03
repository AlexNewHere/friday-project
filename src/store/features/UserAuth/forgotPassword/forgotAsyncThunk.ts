import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import {
  AppDispatch,
  AppRootStateType,
  changeFetching,
  NewPasswordType,
} from 'store/index';
import { handleError } from 'untils/handleError';

export const forgotPasswordThunk = createAsyncThunk<
  void,
  { email: string },
  { state: AppRootStateType; dispatch: AppDispatch }
>('forgot/forgotPasswordThunk', async ({ email }, { getState, dispatch }) => {
  const state = getState();
  const { message, from } = state.forgot;
  dispatch(changeFetching(true));
  try {
    await loginAPI.forgot({ email, from, message });
    dispatch(changeFetching(false));
  } catch (e) {
    handleError(e, dispatch);
    dispatch(changeFetching(false));
  }
});

export const newPasswordThunk = createAsyncThunk<
  void,
  NewPasswordType,
  { dispatch: AppDispatch }
>('forgot/newPasswordThunk', async ({ password, token }, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    await loginAPI.newPassword({ password, token });
    dispatch(changeFetching(false));
  } catch (e) {
    handleError(e, dispatch);
    dispatch(changeFetching(false));
  }
});

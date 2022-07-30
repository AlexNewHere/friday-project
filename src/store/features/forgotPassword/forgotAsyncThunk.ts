import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { NewPasswordType } from 'store/features/forgotPassword/forgotTypes';
import { AppRootStateType } from 'store/store';

export const forgotPasswordThunk = createAsyncThunk<
  void,
  { email: string },
  { state: AppRootStateType }
>('forgot/forgotPasswordThunk', async ({ email }, thunkAPI) => {
  const state = thunkAPI.getState();
  const { message, from } = state.forgot;
  await loginAPI.forgot({ email, from, message });
});

export const newPasswordThunk = createAsyncThunk<void, NewPasswordType>(
  'forgot/newPasswordThunk',
  async ({ password, token }) => {
    await loginAPI.newPassword({ password, token });
  },
);

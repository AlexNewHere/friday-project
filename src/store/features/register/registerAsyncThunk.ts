import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { FormikRegisterType } from 'pages';
import { AppDispatch, changeFetching, setAddedUser } from 'store';
import { handleError } from 'untils/handleError';

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
  } catch (e) {
    handleError(e, dispatch);
    dispatch(changeFetching(false));
  }
});

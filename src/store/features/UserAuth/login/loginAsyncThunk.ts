import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { FormikInitialType, updateProfileType } from 'pages';
import { AppDispatch, changeFetching, setUserData } from 'store/index';
import { handleError } from 'untils/handleError';

export const isInitializedAppThunk = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('login/isInitializedAppThunk', async (_, { dispatch }) => {
  try {
    const res = await loginAPI.authMe();
    dispatch(setUserData(res.data));
  } catch (e) {
    console.log(`Error is - ${e}`);
  }
});

export const loginUserThunk = createAsyncThunk<
  void,
  FormikInitialType,
  { dispatch: AppDispatch }
>('login/loginUserThunk', async (data, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    const response = await loginAPI.login(data);
    dispatch(setUserData(response.data));
    dispatch(changeFetching(false));
  } catch (e) {
    handleError(e, dispatch);
    dispatch(changeFetching(false));
  }
});

export const logOutUserThunk = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  'login/logOutUserThunk',
  async (_, { dispatch }) => {
    dispatch(changeFetching(true));
    try {
      await loginAPI.logOut();
      dispatch(changeFetching(false));
    } catch (e) {
      handleError(e, dispatch);
      dispatch(changeFetching(false));
    }
  },
);

export const updateProfileThunk = createAsyncThunk<
  void,
  updateProfileType,
  { dispatch: AppDispatch }
>('profile/updateUserNameThunk', async (data, { dispatch }) => {
  try {
    dispatch(changeFetching(true));
    const response = await loginAPI.changeMe(data);
    dispatch(setUserData(response.data.updatedUser));
    dispatch(changeFetching(false));
  } catch (e) {
    handleError(e, dispatch);
    dispatch(changeFetching(true));
  }
});

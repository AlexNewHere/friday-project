import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { FormikInitialType, updateProfileType } from 'pages';
import { setUserData } from 'store/features/login/loginSlice';
import { AppDispatch } from 'store/store';

export const isInitializedAppThunk = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('login/isInitializedAppThunk', async (_, thunkAPI) => {
  try {
    const res = await loginAPI.authMe();
    thunkAPI.dispatch(setUserData(res.data));
  } catch (e) {
    console.log(e);
  }
});
export const loginUserThunk = createAsyncThunk<
  void,
  FormikInitialType,
  { dispatch: AppDispatch }
>('login/loginUserThunk', async (data, thunkAPI) => {
  const response = await loginAPI.login(data);
  thunkAPI.dispatch(setUserData(response.data));
});

export const logOutUserThunk = createAsyncThunk<void, void>(
  'login/logOutUserThunk',
  async () => {
    await loginAPI.logOut();
  },
);

export const updateProfileThunk = createAsyncThunk<void, updateProfileType>(
  'profile/updateUserNameThunk',
  async (data, thunkAPI) => {
    try {
      const response = await loginAPI.changeMe(data);
      thunkAPI.dispatch(setUserData(response.data.updatedUser));
    } catch (e) {
      console.log(e);
    }
  },
);

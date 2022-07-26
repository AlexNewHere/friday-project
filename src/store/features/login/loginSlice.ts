import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { FormikInitialType } from 'pages';
import { LoginType, AppDispatch, AuthType } from 'store';

const initialState: LoginType = {
  _id: null,
  email: null,
  name: '',
  avatar: null,
  publicCardPacksCount: 0,
  isInitialized: false,
  isLoggedIn: false,
};

export const loginUserThunk = createAsyncThunk<
  void,
  FormikInitialType,
  { dispatch: AppDispatch }
>('login/loginUserThunk', async (data, thunkAPI) => {
  const response = await loginAPI.login(data);
  thunkAPI.dispatch(setUserData(response.data));
});

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
        console.log(action.error);
      })
      .addCase(isInitializedAppThunk.pending, (state, action) => {
        console.log(action);
      })
      .addCase(isInitializedAppThunk.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(isInitializedAppThunk.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

export const { setUserData } = loginSlice.actions;
